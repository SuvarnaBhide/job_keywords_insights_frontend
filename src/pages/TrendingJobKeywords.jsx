import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const TrendingJobKeywords = () => {
  return (
    <>
      <Box className="w-full px-7">
        <Outlet />
      </Box>
    </>
  );
};

export default TrendingJobKeywords;
