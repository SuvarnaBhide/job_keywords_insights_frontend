/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const DataStorage = () => {
  return (
    <>
      <Box className="w-full px-7">
        <Outlet />
      </Box>
    </>
  );
};

export default DataStorage;
