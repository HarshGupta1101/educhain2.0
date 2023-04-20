import React, { useState, useEffect } from 'react';
import BasicCourseInfoComponent from '../components/UploadCourse/CourseInfo.Component';
import { useParams } from 'react-router-dom';
import ModuleInfoComponent from '../components/UploadCourse/ModuleInfo.Component';

// Disclosure
import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import ChapterInfoComponent from '../components/UploadCourse/ChapterInfo.Component';

const UploadCourseDraftPage = () => {
  const { id } = useParams();
  const [openTab, setOpenTab] = useState('');

  const [courseDetails, setCourseDetails] = useState({
    courseFee: 0,
    courseTitle: '',
    courseBrief: '',
    tags: [],
    timeRequired: '',
    language: '',
    image: '',
    noOfModules: 0,
    courseModules: [],
  });

  const handleModules = () => {
    const modules = [];
    const handleChapter = (noOfChapters, moduleNumber) => {
      let chapters = [];
      // console.log(chapters)
      for (let i = 0; i < noOfChapters; i++) {
        // console.log(i)
        chapters.push(
          // <div
          //   className='w-full text-lg flex justify-between border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'
          //   key={`Module ${moduleNumber} Chapter ${i + 1}`}
          // >
          //   Chapter {i + 1}
          // </div>
          <div
            className='ml-4 text-lg px-4 py-2 border-dashed border-2 rounded hover:bg-gray-200 hover:rounded mb-4'
            key={`Module ${moduleNumber} Chapter ${i + 1}`}
            onClick={() => setOpenTab(`${moduleNumber} Chapter ${i + 1}`)}
          >
            <span>Chapter {i + 1}</span>
          </div>
        );
      }
      // console.log(chapters)
      return chapters;
    };
    for (let i = 0; i < courseDetails.noOfModules; i++) {
      modules.push(
        // <div
        //   className='w-full text-lg flex justify-between border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'
        //   onClick={() => setOpenTab(`Module ${i + 1}`)}
        //   key={`Module${i + 1}`}
        // >
        //   Module {i + 1}
        //   {courseDetails.courseModules.map((module) => {
        //     if (module.moduleNumber === i + 1 && module.noOfChapters !== 0) {
        //       return handleChapter(module.noOfChapters, module.moduleNumber);
        //     }
        //     return null;
        //   })}
        // </div>
        <div key={`Module ${i + 1}`} className='ml-4'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className='flex items-center gap-3 w-full text-lg px-4 py-2 border-dashed border-2 rounded hover:bg-gray-200 hover:rounded mb-4'
                  onClick={() => setOpenTab(`Module ${i + 1}`)}
                >
                  {open ? <BiChevronUp /> : <BiChevronDown />}
                  <span className={open ? 'text-red-600' : 'text-grey-700'}>
                    Module {i + 1}
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='text-gray-500'>
                  {courseDetails.courseModules.map((module) => {
                    if (
                      module.moduleNumber === i + 1 &&
                      module.noOfChapters !== 0
                    ) {
                      return handleChapter(
                        module.noOfChapters,
                        module.moduleNumber
                      );
                    }
                    return null;
                  })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      );
    }
    return modules;
  };

  useEffect(() => {
    if (id) {
      const getData = async () => {
        await fetch(`http://127.0.0.1:5000/course/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: String(localStorage.getItem('token')),
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // handle successful response
            if (!data.status) {
              throw new Error(data.message);
            }
            setCourseDetails(data.course);
          })
          .catch((error) => {
            // handle error response
            console.log(error);
          });
      };
      getData();
    }
  }, []);

  return (
    <>
      <div className='container mx-auto px-12 my-14'>
        <div className='w-full lg:flex lg:flex-row gap-4'>
          <div className='lg:w-1/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-6'>Create your course</h2>
            <div
              className='w-full text-lg px-4 py-2 border-dashed border-2 rounded hover:bg-gray-200 hover:rounded mb-4'
              onClick={() => setOpenTab('Basic Details')}
            >
              Basic Details
            </div>
            {/* <div className='w-full text-lg flex justify-between border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'>
              Modules
            </div> */}
            {/* {courseDetails.noOfModules !== 0 && handleModules()} */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex items-center gap-3 w-full text-lg px-4 py-2 border-dashed border-2 rounded hover:bg-gray-200 hover:rounded mb-4'>
                    {open ? <BiChevronUp /> : <BiChevronDown />}
                    <span className={open ? 'text-red-600' : 'text-grey-700'}>
                      Module
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-500'>
                    {courseDetails.noOfModules !== 0 && handleModules()}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <div
              className='w-full text-lg border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'
              onClick={() => setOpenTab('Assignment')}
            >
              Assignment
            </div>
            <button className='px-4 py-2 border-dashed border-2 rounded hover:bg-gray-200 hover:rounded mb-4 disabled'>
              Submit Course
            </button>
          </div>
          <div className='lg:w-3/4 p-4 bg-white rounded'>
            {openTab === 'Basic Details' && (
              <BasicCourseInfoComponent
                courseDetails={courseDetails}
                setCourseDetails={setCourseDetails}
              />
            )}

            {openTab.split(' ')[0] === 'Module' && (
              <ModuleInfoComponent
                courseDetails={courseDetails}
                setCourseDetails={setCourseDetails}
                moduleNumber={openTab}
                CourseId={id}
              />
            )}
            {openTab.split(' ')[1] === 'Chapter' && (
              <ChapterInfoComponent
                courseDetails={courseDetails}
                setCourseDetails={setCourseDetails}
                moduleNumber={parseInt(openTab.split(' ')[0])}
                chapterNumber={parseInt(openTab.split(' ')[2])}
                CourseId={id}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCourseDraftPage;
