import React from 'react'
import { Pagination,Box,Stack,Typography } from '@mui/material'
import {exercisesOptions,fetchData} from '../utils/fetchData'

const Exercises=({exercises,setExercises,bodyPart})=> {
  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

    </Box>
  )
}

export default Exercises