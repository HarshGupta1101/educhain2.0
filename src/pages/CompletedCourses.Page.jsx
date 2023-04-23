import React,{useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar/Sidebar.Component';
import CompletedCourses from '../components/CompletedCourses/CompletedCourses.Component';
// import courses from '../utils/data';

const CompletedCoursesPage = () => {
  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch('http://127.0.0.1:5000/course/course-completed', {
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
          console.log(data.courses)
          setCourseDetails(data.courses);
        })
        .catch((error) => {
          // handle error response
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full lg:flex lg:flex-row gap-4'>
          <div className='lg:w-1/5 p-4 bg-white rounded'>
            <div>
              <Sidebar />
            </div>
          </div>
          <div className='lg:w-4/5 p-4 bg-white rounded'>
            <h1 className='text-2xl font-bold my-3'>Completed Courses</h1>
            <CompletedCourses 
            posters={courseDetails}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedCoursesPage;
