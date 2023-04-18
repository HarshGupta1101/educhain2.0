import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.Component';
import Profile from '../components/Profile/Profile.Component';

const ProfilePage = () => {

  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-4/5 p-4 bg-white rounded'>
            <h1 className='text-2xl font-bold my-3'>Profile</h1>
            <Profile />
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

export default ProfilePage;
