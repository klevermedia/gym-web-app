import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <Box position='relative' p='0 40px' className='hero-banner' sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh',
      maxWidth: {
        xs: '100%',
        md: '50%',
      }
    }}>
      
      <Typography variant='h2' fontSize='30px' letterSpacing='3px' className='pre-title' sx={{
        marginBottom: '30px',
      }}>
        First sport
      </Typography>

      <Typography variant='h1' fontFamily='Inter' fontWeight='bold' sx={{
        fontSize: { xs: '60px', md: '80px' },
        lineHeight: { xs: '60px', md: '80px' },
        marginBottom: '30px',
      }}>
        Introducing: the new you
      </Typography>

      <Typography mb='20px' fontFamily='Inter'>
        Check out the most effective exercises to help you acheive a healthier lifestyle.
      </Typography>
      
      <Button variant='outlined' sx={{
        alignSelf: 'self-start'
      }}>Browse exercises</Button>

      <Typography fontWeight={600} fontFamily='Inter' sx={{
        opacity: 0.1,
        display: { md: 'block', xs: 'none' },
        fontSize: '20vw',
        position: 'absolute',
        bottom: '-15%',
        pointerEvents: 'none',
      }}>
        exercises
      </Typography>
    </Box>
  )
}

export default HeroBanner;