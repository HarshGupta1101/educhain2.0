import React from 'react';
import { BiSearch } from 'react-icons/bi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';

function NavSm() {
  return (
    <>
      <div className='text-white flex items-center justify-between'>
        <div className='w-6 h-6'>
          <BiSearch />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className='w-full flex items-center gap-3 bg-white  px-3 py-1 rounded-md'>
        <BiSearch />
        <input
          type='search'
          className='w-full bg-transparent border-none focus:outline-none'
          placeholder='Search Courses'
        />
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className='container flex mx-auto px-4 py-2 items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
          <h1 className='text-white font-bold text-3xl'>
            {' '}
          <Link
            to='/'> 
            <span className='text-orange-400 hover:text-orange-500'>E</span>du
            <span className='text-orange-400 hover:text-orange-500'>C</span>hain
          </Link>
          </h1>
          <div className='w-full flex items-center gap-3 bg-white ml-4 px-3 py-1 rounded-md'>
            <BiSearch />
            <input
              type='search'
              className='w-full bg-transparent border-none focus:outline-none'
              placeholder='Search Courses'
            />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <Link to='/' className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'>
            Home
          </Link>
          <Link to='/' className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'>
            About
          </Link>
          <Link to='/courses' className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'>
            Courses
          </Link>
          <Link
            to='/login'
            className='bg-orange-400 text-white text-lg px-2 py-1 text-sm rounded hover:bg-orange-500'
          >
            Sign In
          </Link>
          <Link to='/cart' className='w-8 h-8 text-white mt-1'>
            <Badge badgeContent={2} color='primary'>
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <>
      <nav className='bg-darkBackground-700 px-4 py-3'>
        <div className='md:hidden'>
          {/* Mobile Screen */}
          <NavSm />
        </div>
        <div className='hidden md:flex lg:hidden'>
          {/* Medium/Tab Screen */}
          <NavMd />
        </div>
        <div className='hidden w-full lg:flex'>
          {/* Large Screen*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
