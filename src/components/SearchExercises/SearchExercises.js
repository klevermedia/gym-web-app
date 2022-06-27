import React, { useEffect, useState } from 'react';
import { Box, Stack, IconButton, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import HorizontalScrollBar from '../HorizontalScrollBar/HorizontalScrollBar';

import { exerciseOptions, fetchData } from '../../utils/fetchData';
import './SearchExercises.scss';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart, search, setSearch }) => {

  const [bodyParts, setBodyParts] = useState([]);  

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();

  }, []);

  const handleSearch = async () => {
      if(search) {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

        const searchedExercises = exerciseData.filter((exercise) => (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        ));

        // Empty the value of input field
        setExercises(searchedExercises);
      }
  }

  return (
    <Stack alignItems='center' justifyContent='center'>
      <Box id='search' py='80px' alignItems='center' justifyContent='center' sx={{
        width: { xs: '100%', lg: '50%' },
        textAlign: 'center',
      }}>
        <Typography variant='h3' mb='20px'>
        Get started
        </Typography>

        <Box  alignItems='center' justifyContent='center' sx={{
          position: 'relative'
        }}>
          <TextField
            placeholder='Deadlifts, Squats, Barbell Curls, etc.'
            label='Search exercise library'
            value={search}
            variant='outlined'
            size='medium'
            type='text'
            className='search-field'
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            sx={{
              width: '100%',
            }}
          />
          <IconButton className='button-search' onClick={handleSearch} sx={{
            background: '#090714',
            position: 'absolute',
            right: '8px',
            top: '8px'
          }}>
            <Search sx={{
              color: '#FFF',
            }} />
          </IconButton>
        </Box>
      </Box>
      <Box className='search-wrapper' p="40px">
        <HorizontalScrollBar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises;