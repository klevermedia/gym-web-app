import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to ={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction ='row'>
        <Button variant="contained" sx={{
          marginLeft: '21px',
          color: '#fff',
          backgroundColor: '#f9f9f9',
          fontSize: '20px',
          textTransform: 'capitalize',
          border: 'none',
          textDecoration: 'none'
        }}>
          {exercise.bodyPart}
        </Button>
        <Button variant="contained" sx={{
          marginLeft: '21px',
          color: '#fff',
          backgroundColor: '#f9f9f9',
          fontSize: '20px',
          textTransform: 'capitalize',
          border: 'none',
          textDecoration: 'none'
        }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography>{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard;