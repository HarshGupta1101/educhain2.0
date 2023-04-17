import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar.Component';
import { Link } from 'react-router-dom';
import CompletedCourses from '../components/CompletedCourses/CompletedCourses.Component';
import courses from '../utils/data';

const CompletedCoursesPage = () => {

  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-4/5 p-4 bg-white rounded'>
            <h1 className='text-2xl font-bold my-3'>Completed Courses</h1>
            <CompletedCourses 
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

export default CompletedCoursesPage;
