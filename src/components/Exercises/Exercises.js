import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import './Exercises.scss';

const Exercises = ({ exercises, setExercises, bodyPart, search }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 15;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1200, behavior: 'smooth' });
  }

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exerciseData);
    }
    
    fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box p='15px' className='exercises-wrapper'>
      <Typography variant='h3' className='title'>
        Showing <span>{search !== '' ? search : bodyPart}</span> exercises
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{
        gap: {
          xs: '30px'
        }
      }}>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack>
        {exercises.length > 15 && (
          <Pagination
            color='standard'
            shapre='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises;