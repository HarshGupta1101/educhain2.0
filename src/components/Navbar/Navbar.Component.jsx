import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useCartContext } from '../../context/cart.context';
import { Slide, toast } from 'react-toastify';
import { GiHamburgerMenu } from 'react-icons/gi';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function RemoveToken() {
  localStorage.removeItem('token');
  window.history.pushState(null, null, 'http://localhost:3000/login');
  window.dispatchEvent(new Event('popstate'));
  toast.success('Successfully Signed Out !', {
    position: "top-center",
    autoClose: 2000,
    transition: Slide,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
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
              Sign Out
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

function NavLg() {
  const [isloggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));
  const { total_items } = useCartContext();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1 className='ml-4 text-2xl font-bold mt-4 mb-2'>Categories</h1>
      <Divider />
      <List>
        {[
          'Python',
          'Web Development',
          'Data Analytics',
          'Social Media Marketing',
          'UI/UX Development',
          'Machine Learning',
          'Cyber Security',
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link to={`/courses/${text}`}>
                <ListItemText primary={text} sx={{ paddingLeft: '8px' }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              Sign Out
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

          <Link to='/cart' className='h-8 text-white mt-1'>
            <Badge badgeContent={total_items} color='primary'>
              <ShoppingCartIcon />
            </Badge>
          </Link>
          <React.Fragment>
            <div
              className='w-6 h-6 text-white hover:cursor-pointer'
              onClick={toggleDrawer('right', true)}
            >
              <GiHamburgerMenu className='w-full h-full' />
            </div>
            <Drawer
              anchor='right'
              open={state['right']}
              onClose={toggleDrawer('right', false)}
            >
              {list('right')}
            </Drawer>
          </React.Fragment>
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
