import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import '../styles/Pages.css';

const TrendingJobKeywords = () => {
  return (
    <>
      <Box className="page-container-styles">
        <Outlet />
      </Box>
    </>
  );
};

export default TrendingJobKeywords;
