/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import '../styles/Quiz.css';

const Quiz = () => {
  return (
    <>
      <Box className="quiz__component">
        <Outlet />
      </Box>
    </>
  );
};

export default Quiz;
