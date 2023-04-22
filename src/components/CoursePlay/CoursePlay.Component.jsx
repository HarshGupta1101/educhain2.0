import React from 'react';
import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const CoursePlayComponent = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='p-2 border-2 border-dashed flex items-center gap-4 w-full'>
            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open ? 'text-red-600' : 'text-grey-700'}>
              Module {props.moduleNumber} - {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className='text-gray-500'>
            <div className='flex items-center gap-3 flex-wrap'>
              {props.chapters.map((chapter, index) => (
                <div
                  className='border-2 border-gray-200 ml-8 px-3 py-1 rounded hover:cursor-pointer w-full'
                  onClick={() => {
                    props.setAssignmentClicked(null);
                    props.setChapterClicked(chapter);
                  }}
                  key={index}
                >
                  Chapter {chapter.chapterSequence} - {chapter.chapterName}
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
