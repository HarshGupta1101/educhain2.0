import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const CoursePlayComponent = (props) => {
  const [chaptersChecked, setChaptersChecked] = useState([]);
  const [allChaptersChecked, setAllChaptersChecked] = useState(false);
  const [moduleChecked, setModuleChecked] = useState(false);
  const [moduleDisabled, setModuleDisabled] = useState(true);
  const [chapterDisabled, setChapterDisabled] = useState(false);

  useEffect(() => {
    const allChecked = props.chapters.every(chapter => chaptersChecked.includes(chapter.chapterSequence));
    setAllChaptersChecked(allChecked);
  }, [chaptersChecked, props.chapters]);

  useEffect(() => {
    const allChaptersChecked = props.chapters.every(chapter => chaptersChecked.includes(chapter.chapterSequence));
    setModuleChecked(allChaptersChecked);
  }, [chaptersChecked, props.chapters]);

  const handleChapterCheck = (chapterSequence) => {
    if (chaptersChecked.includes(chapterSequence)) {
      const newChecked = chaptersChecked.filter(chapter => chapter !== chapterSequence);
      setChaptersChecked(newChecked);
      setAllChaptersChecked(false);
      setModuleChecked(false);
    } else {
      const newChecked = [...chaptersChecked, chapterSequence];
      setChaptersChecked(newChecked);
      if (newChecked.length === props.chapters.length) {
        setAllChaptersChecked(true);
        setModuleChecked(true);
        setModuleDisabled(true);
        setChapterDisabled(true);
      }
    }
  };
  
  const handleModuleCheck = () => {
    if (moduleChecked) {
      setChaptersChecked([]);
      setAllChaptersChecked(false);
      setModuleChecked(false);
    } else {
      const allChapterSequences = props.chapters.map(chapter => chapter.chapterSequence);
      setChaptersChecked(allChapterSequences);
      setAllChaptersChecked(true);
      setModuleChecked(true);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    await fetch(`http://127.0.0.1:5000/course/status/module/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        // handle successful response
        if (!response.ok) { 
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
      })
      .catch((error) => {
        // handle error response
        console.log(error);
      });
  };


  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='p-2 border-2 border flex items-center gap-4 w-full'>
            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open ? 'text-gray-600' : 'text-black'}>
              <input
                type='checkbox'
                checked={moduleChecked}
                onChange={handleModuleCheck}
                className='mr-2'
                disabled={moduleDisabled}
              />
              <b>Module {props.moduleNumber}: </b> {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className='text-gray-600'>
            <div className='flex items-center gap-3 flex-wrap'>
              {props.chapters.map((chapter, index) => (
                <div
                  className='border-2 border-gray-200 ml-8 px-3 py-1 rounded hover:cursor-pointer w-full flex items-center'
                  key={index}
                >
                  <input
                    type='checkbox'
                    checked={chaptersChecked.includes(chapter.chapterSequence)}
                    onChange={() => handleChapterCheck(chapter.chapterSequence)}
                    className='mr-2'
                    disabled={chapterDisabled || allChaptersChecked}
                    onClick={handleClick}
                  />
                  <div
                    className='flex-1'
                    onClick={() => {
                      props.setAssignmentClicked(null);
                      props.setChapterClicked(chapter);
                    }}
                  >
                  <b><i>Chapter {chapter.chapterSequence}: </i></b> {chapter.chapterName}
                  </div>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default CoursePlayComponent;