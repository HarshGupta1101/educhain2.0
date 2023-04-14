import * as React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <p className='text-white text-lg text-center'>&copy;
          <Link to='/'> 
            <span className='text-orange-400 hover:text-orange-500'> E</span>du
            <span className='text-orange-400 hover:text-orange-500'>C</span>hain 
          </Link> 2023. All Rights Reserved.
    </p>
  );
}

export default Footer;