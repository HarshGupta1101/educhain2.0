import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.Component';
import { Link } from 'react-router-dom';
import UploadedCourses from '../components/UploadedCourses/UploadedCourses.Component';
import AddIcon from '@mui/icons-material/Add';
import courses from '../utils/data';

const UploadedCoursesPage = () => {

  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-4/5 p-4 bg-white rounded'>
          <div className='flex gap-2'>
            <h1 className='text-2xl font-bold my-1 mr-4'>Uploaded Courses</h1>
            <Link to='/uploadcourses'>
            <button class="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white"><AddIcon /> Upload Course</button>
            </Link>
            </div>
            <UploadedCourses  
            posters={courses}
          />
          </div>

          <div className='lg:w-1/5 p-4 bg-white rounded'>
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadedCoursesPage;
