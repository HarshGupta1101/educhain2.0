import React, { useState } from 'react';
// import BasicCourseInfoComponent from '../components/UploadCourse/BasicCourseInfo.Component';
import NestedModal from '../components/Modal/NestedModal.Component';
// import EditNoteIcon from '@mui/icons-material/EditNote';

const UploadCourseDraftPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [courseDetails, setCourseDetails] = useState({
    modules: [],
    coursePrice: null,
    courseTitle: '',
    courseDescription: '',
    instructor: '',
    courseTags: '',
    courseDuration: null,
  });

  return (
    <>
      <div className='container mx-auto px-12 my-14'>
        <div className='w-full lg:flex lg:flex-row gap-4'>
          <div className='lg:w-1/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-6'>Create your course</h2>
            <div className='w-full text-lg px-4 py-2 border-dashed border-2 rounded hover:bg-gray-200 hover:rounded mb-4'>
              Basic Details
            </div>
            <div className='w-full text-lg flex justify-between border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'>
              <p>Modules</p>
            </div>
            {courseDetails.modules &&
              courseDetails.modules.map((module, idx) => {
                return (
                  <>
                    <div className='w-full text-lg flex justify-between border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'>
                      <p>Module {idx + 1}</p>
                      {/* {module.moduleChapters &&
                      module.moduleChapters.map((chapter, idx) => {
                        return (
                          <div className='w-full text-lg flex justify-between border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'>
                            <p>Chapter {idx + 1}</p>
                          </div>
                        );
                      })} */}
                    </div>
                    {module.moduleChapters &&
                      module.moduleChapters.map((chapter, idx) => {
                        return (
                          <div className='w-full text-lg flex justify-between border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'>
                            <p>Chapter {idx + 1}</p>
                          </div>
                        );
                      })}
                  </>
                );
              })}
            <div className='w-full text-lg border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'>
              Pricing
            </div>
            <div className='w-full text-lg border-dashed border-2 rounded px-4 py-2 hover:bg-gray-200 hover:rounded mb-4'>
              Assignment
            </div>
            <button
              className='px-4 py-2 border-dashed border-2 rounded hover:bg-gray-200 hover:rounded mb-4'
              onClick={handleOpen}
            >
              Submit Course
            </button>
            <NestedModal
              open={open}
              handleClose={handleClose}
              courseDetails={courseDetails}
              setCourseDetails={setCourseDetails}
            />
          </div>
          <div className='lg:w-3/4 p-4 bg-white rounded'>
            {/* <BasicCourseInfoComponent
              courseDetails={courseDetails}
              setCourseDetails={setCourseDetails}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCourseDraftPage;
