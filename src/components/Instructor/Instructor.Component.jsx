import React from 'react';

const Instructor = ({courseInstructor}) => {
  return (
    <div className='flex flex-col'>
      <div className='w-32 h-32'>
        <img
          src='https://res.cloudinary.com/diczskxkx/image/upload/v1681462487/avatar_cizxks.jpg'
          alt='cast and crew member'
          className='w-full h-full rounded-full object-center object-cover'
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-xl text-gray-800'>{courseInstructor}</h1>
      </div>
    </div>
  );
};

export default Instructor;
