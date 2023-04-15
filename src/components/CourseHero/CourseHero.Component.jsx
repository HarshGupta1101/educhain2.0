import React from 'react';
import CourseInfo from './CourseInfo.Component';

const CourseHeroComponent = () => {
  return (
    <>
      <div>
        {/* mobile & tab sized devices */}
        <div className='lg:hidden w-full'>
          <div className='w-full'>
            <img
              src='https://res.cloudinary.com/diczskxkx/image/upload/v1681381223/MicrosoftTeams-image_4_vdw9pu.png'
              alt='cover poster'
              className='m-4 rounded'
              style={{
                width: 'calc(100% - 2rem)',
              }}
            />
          </div>
          <div className='flex flex-col gap-3 lg:hidden'>
            <div className='flex flex-col-reverse gap-3 px-4 my-3'>
              <div className='text-black flex flex-col gap-2 md:px-4'>
                <h1 className='text-2xl font-bold'>Python For Everbody</h1>
                <h4>Tags - Python, DataScience, Machine Learning</h4>
                <h4>Language - English</h4>
                <h4>Duration - 1 hour 30 mins 45 sec</h4>
              </div>
            </div>
            <div className='flex items-center gap-3 md:px-4 md:w-screen text-xl px-4'>
              <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>
                Buy ₹149
              </button>
            </div>
          </div>
        </div>

        {/* Large Screen Devices */}
        <div
          className='relative hidden w-full lg:block'
          style={{ height: '30rem' }}
        >
          <div
            className='absolute z-10 w-full h-full'
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)',
            }}
          ></div>

          <div className='absolute z-30 left-24 top-10 flex items-center gap-10'>
            <div className='w-66 h-96'>
              <img
                src='https://res.cloudinary.com/diczskxkx/image/upload/v1681381223/MicrosoftTeams-image_4_vdw9pu.png'
                alt='Movie Poster'
                className='w-full h-full rounded-xl'
              />
            </div>
            <div>
              <CourseInfo />
            </div>
          </div>
          <img
            src='https://res.cloudinary.com/diczskxkx/image/upload/v1681462125/mit_grei6f.webp'
            alt='backdrop poster'
            className='w-full h-full'
          />
        </div>
      </div>
    </>
  );
};

export default CourseHeroComponent;
