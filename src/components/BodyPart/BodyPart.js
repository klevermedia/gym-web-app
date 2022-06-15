import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      className='body-part-card'
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
      sx={{
          backgroundColor: bodyPart === item ? 'red' : '',
          padding: '20px',
      }}
    >
      <Typography fontSize='20px'>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart;