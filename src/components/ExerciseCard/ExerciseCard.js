import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import './ExerciseCard.scss';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to ={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row' className='buttons'>
        <Button variant='contained'>
          {exercise.bodyPart}
        </Button>
        <Button variant='contained'>
          {exercise.target}
        </Button>
      </Stack>
      <Typography className='card-title'>{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard;