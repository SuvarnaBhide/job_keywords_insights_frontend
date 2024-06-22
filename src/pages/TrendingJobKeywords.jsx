import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import '../styles/TrendingJobKeywords.css';

const TrendingJobKeywords = () => {
  return (
    <>
      <Box className="crawler__component">
        <Box className="crawler__tabcontent">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default TrendingJobKeywords;
