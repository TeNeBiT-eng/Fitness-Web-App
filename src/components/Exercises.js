import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from "../utilities/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart}) => {
  return (
  <Box id='exercises'
    sx={{ mt: {lg: '110px'}}}
    mt='50px'
    p='20px'
  >
    <Typography variant="h4">
      Showing Results
    </Typography>
  </Box>
  )
};

export default Exercises;
