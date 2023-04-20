import React from 'react';
import AllCourses from '../components/AllCourses/AllCourses.Component';
import courses from '../utils/data';

function AllCoursesPage() {
  
    return (
      <>
        <div className='container mx-auto px-4 md:px-12 mt-8 mb-12'>
          <AllCourses
            title='All Courses'
            subtitle='Start Learning Today !'
            posters={courses}
          />
        </div>
      </>
    );
  }
  
  export default AllCoursesPage;
  