import React, { useState } from 'react';
import Dashboard from '../components/Sidebar/Sidebar.Component';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import InProgressCourses from '../components/InProgressCourses/InProgressCourses.Component';

const InProgressCoursesPage = () => {

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
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-4/5 p-4 bg-white rounded'>
            <h1 className='text-2xl font-bold my-3'>In-Progress Courses</h1>
            <InProgressCourses
            posters={allCourses}
          />
          </div>

          <div className='lg:w-1/5 p-4 bg-white rounded'>
            <div>
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InProgressCoursesPage;
