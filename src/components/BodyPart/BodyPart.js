import React from 'react';
import { Stack, Typography } from '@mui/material';
import './BodyPart.scss';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      className={`body-part-card ${bodyPart === item ? 'active' : ''}`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1200, left: 100, behavior: 'smooth' })
      }}
    >
      <Typography fontSize='20px'>
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart;