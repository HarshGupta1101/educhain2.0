import React from 'react';
import { ImBin } from 'react-icons/im';

function CartCardComponent() {
  return (
    <>
      <div className='flex item-start gap-6 p-3 my-4 border-dashed border-2 rounded-md'>
        <div className='w-20 h-20'>
          <img
            src='https://res.cloudinary.com/diczskxkx/image/upload/v1681381223/MicrosoftTeams-image_5_iw3nk4.png'
            alt='Python Course'
            className='w-full h-full rounded-xl'
          />
        </div>
        <div>
          <h3 className='text-gray-700 text-xl font-bold mb-1'>
            Introduction to Python
          </h3>
          <p className='text-gray-400 text-sm mb-2'>
            By Ritik Jain, Web Developer
          </p>
          <h3 className='text-lg font-bold text-orange-400 mb-4'>$ 9.90</h3>
          <span className='font-bold flex items-center gap-1 cursor-pointer hover:text-red-400'>Remove <ImBin/></span>
        </div>
      </div>
    </>
  );
}

export default CartCardComponent;
