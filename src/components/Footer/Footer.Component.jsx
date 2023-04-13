import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link to="/" color="inherit">
        EduChain.
      </Link>{' All Rights Reserved. '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {

  return (
    <p className='text-white text-lg text-center'>&copy;
          <Link to='/'> 
            <span className='text-orange-400 hover:text-orange-500'> E</span>du
            <span className='text-orange-400 hover:text-orange-500'>C</span>hain 
          </Link> 2023. All Rights Reserved.</p>
  );
}

export default Footer;