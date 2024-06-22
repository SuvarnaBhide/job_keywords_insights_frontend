import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import '../styles/TrendingJobKeywords.css';

const TrendingJobKeywords = () => {
  return (
    <>
      <Box className="chatbot__component">
        <Outlet />
      </Box>
    </>
  );
};

export default TrendingJobKeywords;
