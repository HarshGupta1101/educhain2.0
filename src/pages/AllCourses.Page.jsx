import React, { useState } from 'react';
import AllCourses from '../components/AllCourses/AllCourses.Component';

function AllCoursesPage() {
    const [allCourses, setallCourses] = useState([
      {
        image:
          'https://res.cloudinary.com/diczskxkx/image/upload/v1676155679/azn1ngpqwcn5ounqm9ef.jpg',
        title: 'Learn Python: The Complete Python Programming Course',
        instructor: 'Ritik Jain',
        coursePrice: '10',
      },
      {
        image:
          'https://res.cloudinary.com/diczskxkx/image/upload/v1676152970/ileldz1zu8nka3xdjpgo.jpg',
        title: 'Learn Python: The Complete Python Programming Course',
        instructor: 'Ritik Jain',
        coursePrice: '10',
      },
      {
        image:
          'https://res.cloudinary.com/diczskxkx/image/upload/v1676155679/azn1ngpqwcn5ounqm9ef.jpg',
        title: 'Learn Python: The Complete Python Programming Course',
        instructor: 'Ritik Jain',
        coursePrice: '10',
      },
      {
        image:
          'https://res.cloudinary.com/diczskxkx/image/upload/v1674463149/samples/animals/kitten-playing.gif',
        title: 'Learn Python: The Complete Python Programming Course',
        instructor: 'Ritik Jain',
        coursePrice: '10',
      },
      {
        image:
          'https://res.cloudinary.com/diczskxkx/image/upload/v1676152970/ileldz1zu8nka3xdjpgo.jpg',
        title: 'Learn Python: The Complete Python Programming Course',
        instructor: 'Ritik Jain',
        coursePrice: '10',
      },
      {
        image:
          'https://res.cloudinary.com/diczskxkx/image/upload/v1676155633/oqu9tyknlcytgjvrlrid.jpg',
        title: 'Learn Python: The Complete Python Programming Course',
        instructor: 'Ritik Jain',
        coursePrice: '10',
      },
    ]);
  
    return (
      <>
        <div className='container mx-auto px-4 md:px-12 mt-8 mb-12'>
          <AllCourses
            title='All Courses'
            subtitle='Start Learning Today !'
            posters={allCourses}
          />
        </div>
      </>
    );
  }
  
  export default AllCoursesPage;
  