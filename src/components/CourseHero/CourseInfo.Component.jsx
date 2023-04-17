import React from 'react';

const CourseInfo = () => {
  return (
    <>
      <div className='flex flex-col gap-8'>
        <h1 className='text-white text-5xl font-bold'>Python For Everbody</h1>
        <div className='flex flex-col gap-5 text-white'>
          <h4>Tags - Python, DataScience, Machine Learning</h4>
          <h4>Language - English</h4>
          <h4>Duration - 1 hour 30 mins 45 sec</h4>
        </div>
        <div className='flex items-center w-full'>
          <button className='bg-orange-500 hover:bg-orange-600 p-3 text-white font-semibold rounded-lg'>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default CourseInfo;
