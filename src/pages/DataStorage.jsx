/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import '../styles/TrendingJobKeywords.css';

const DataStorage = () => {
  return (
    <>
      <Box className="chatbot__component">
        <Outlet />
      </Box>
    </>
  );
};

export default DataStorage;
