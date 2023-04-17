import React from 'react';
import { Link } from 'react-router-dom';

const UploadedPoster = (props) => {

  return (
    <div
      className='flex flex-col items-start border shadow rounded-lg gap-2 pb-2'
      style={{ marginRight: '20px' }}
    >
      <div className='h-30 md:h-40 w-full'>
        <img
          src={props.image}
          alt='poster'
          className='w-full h-full rounded-md'
        />
      </div>
      <div className='px-4 pb-2'>
        <h3 className='text-lg font-bold text-gray-700'>{props.courseTitle}</h3>
        <p className='text-xs text-gray-500 mb-2'>By {props.instructor}</p>
        <h3 className='mb-3 font-bold'>Ⓝ {props.courseFee}</h3>
        <div className='flex gap-2'>
          <Link
            to={`/course/${props.courseId}`}
            className='rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white'
          >
            Edit Course
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UploadedPoster;
