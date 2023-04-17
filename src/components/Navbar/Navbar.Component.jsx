import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useCartContext } from '../../context/cart.context';

function RemoveToken() {
  localStorage.removeItem('token');
  window.history.pushState(null, null, 'http://localhost:3000/login');
  window.dispatchEvent(new Event('popstate'));
}

function NavSm() {
  return (
    <>
      <div className='flex items-center w-1/2 gap-3'>
        <h1 className='text-white font-bold text-3xl'>
          {' '}
          <Link to='/'>
            <span className='text-orange-400 hover:text-orange-500'>E</span>du
            <span className='text-orange-400 hover:text-orange-500'>C</span>hain
          </Link>
        </h1>
      </div>
    </>
  );
}

function NavMd() {
  const [isloggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));
  const { total_items } = useCartContext();
  return (
    <>
      <div className='flex items-center w-1/2 gap-3'>
        <h1 className='text-white font-bold text-3xl'>
          {' '}
          <Link to='/'>
            <span className='text-orange-400 hover:text-orange-500'>E</span>du
            <span className='text-orange-400 hover:text-orange-500'>C</span>hain
          </Link>
        </h1>
      </div>
      <div className='flex items-center gap-5'>
        <Link
          to='/'
          className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'
        >
          Home
        </Link>
        {/* <Link
          to='/'
          className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'
        >
          About
        </Link> */}
        <Link
          to='/courses'
          className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'
        >
          Courses
        </Link>
        {isloggedIn ? (
          <button
            className='bg-orange-400 text-white text-lg px-2 py-1 text-sm rounded hover:bg-orange-500'
            onClick={RemoveToken}
          >
            Logout
          </button>
        ) : (
          <Link
            to='/login'
            className='bg-orange-400 text-white text-lg px-2 py-1 text-sm rounded hover:bg-orange-500'
          >
            Sign In
          </Link>
        )}
        {isloggedIn && <AccountCircleIcon />}

        <Link to='/cart' className='w-8 h-8 text-white mt-1'>
          <Badge badgeContent={total_items} color='primary'>
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </>
  );
}

function NavLg() {
  const [isloggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));
  const { total_items } = useCartContext();
  return (
    <>
      <div className='container flex mx-auto px-4 py-2 items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
          <h1 className='text-white font-bold text-3xl'>
            {' '}
            <Link to='/'>
              <span className='text-orange-400 hover:text-orange-500'>E</span>du
              <span className='text-orange-400 hover:text-orange-500'>C</span>
              hain
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
          <Link
            to='/'
            className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'
          >
            Home
          </Link>
          {/* <Link
            to='/'
            className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'
          >
            About
          </Link> */}
          <Link
            to='/courses'
            className='text-gray-200 text-lg text-base flex items-center cursor-pointer hover:text-white'
          >
            Courses
          </Link>
          {isloggedIn ? (
            <button
              className='bg-orange-400 text-white text-lg px-2 py-1 text-sm rounded hover:bg-orange-500'
              onClick={RemoveToken}
            >
              Logout
            </button>
          ) : (
            <Link
              to='/login'
              className='bg-orange-400 text-white text-lg px-2 py-1 text-sm rounded hover:bg-orange-500'
            >
              Sign In
            </Link>
          )}
          {isloggedIn && (
            <Link to='/profile' className='text-white hover:text-gray-200'>
              <AccountCircleIcon fontSize='large' />
            </Link>
          )}

          <Link to='/cart' className='w-8 h-8 text-white mt-1'>
            <Badge badgeContent={total_items} color='primary'>
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
