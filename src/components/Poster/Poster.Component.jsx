import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Poster = (props) => {
  return (
    <Link>
      <div className='flex flex-col items-start border shadow rounded-lg gap-2' style={{marginRight: '20px'}}>
        <div className='h-40 md:h-50'>
          <img
            src={props.image}
            alt='poster'
            className='w-full h-full rounded-md'
          />
        </div>
        <div className='px-4 pb-2'>
          <h3 className='text-lg font-bold text-gray-700'>{props.title}</h3>
          <p className='text-xs text-gray-500 mb-2'>By {props.instructor}</p>
          <h3 className='mb-4'>Ⓝ{props.coursePrice}</h3>
          <div className='flex gap-2'>
          <button class="rounded text-black p-2 border-2 border-black hover:bg-black hover:text-white">See Details</button>
          <button class="rounded bg-black text-white p-2 hover:text-black hover:bg-white hover:border-2 hover:border-black">Add To Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Poster;
