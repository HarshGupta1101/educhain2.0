import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const CoursePlayComponent = (props) => {
  
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='p-2 border-2 border flex items-center gap-4 w-full'>
            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open ? 'text-gray-600' : 'text-black'}>
              <input
                type='checkbox'
                className='mr-2'
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
                    className='mr-2'
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