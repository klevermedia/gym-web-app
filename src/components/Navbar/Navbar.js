import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import './Navbar.scss';

const Navbar = () => {
  return (
    <Stack direction='row' sx={{ gap: { sm: '122px', xs: '40px', mt: { sm: '40px', xs: '30px 20px' } } }} p='40px' className='navbar'>
      <Link to='/'>
        <img src='../../assets/images/logo.svg' alt='logo' className='logo' />
      </Link>
      <Stack direction='row' alignItems='flex-end' gap='40px' ml='auto' className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/exercise'>Exercise</Link>
      </Stack>
    </Stack>
  )
}

export default Navbar