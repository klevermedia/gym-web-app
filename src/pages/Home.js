import React, { useState } from 'react'
import { Box } from '@mui/material';

import Navbar from '../components/Navbar/Navbar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import SearchExercises from '../components/SearchExercises/SearchExercises';
import Exercises from '../components/Exercises/Exercises';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [search, setSearch] = useState('');

  console.log(bodyPart);
  return (
    <Box>
      <div className='banner-container'>
        <Navbar />
        <HeroBanner />
      </div>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} setSearch={setSearch} search={search} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} search={search} />
    </Box>
  )
}

export default Home