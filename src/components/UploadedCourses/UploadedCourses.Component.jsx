import React from 'react';
import Poster from '../Poster/UploadedPoster.Component';

const UploadedCourses = (props) => {

  const { posters, title, subtitle } = props;

  return (
    <>
      <div className='flex flex-col items-start sm:ml-3 ml-0 mb-6'>
        <h3 className='text-3xl font-bold text-black'>{title}</h3>
        <p className='text-md text-gray-800'>{subtitle}</p>
      </div>
      <div className="grid gap-4 grid-cols-3">
      {posters.map((each) => (
          <Poster {...each} />
        ))}
      </div>
    </>
  );
};

export default UploadedCourses;
