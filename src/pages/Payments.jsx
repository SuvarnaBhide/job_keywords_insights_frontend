/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import '../styles/TrendingJobKeywords.css';
import CustomDialog from '../components/common/Dialogs/CustomDialog';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/QuizDetailsDialog.css';

const UserDetailsRow = ({ label, value }) => {
    return (
      <Stack flexDirection="row" className="detailsdialog__row">
        <div className="detailsdialog__row__key text-[15px]">
          {label}
        </div>
        <div variant="body1" className="detailsdialog__row__value text-[15px]">
          {value}
        </div>
      </Stack>
    );
  };

const UserDetailsDialog = ({ userDetails, loading }) => {

  return (
    <div className="detailsdialog">
      <div className="detailsdialog__title text-[20px] rounded-lg">
        Payments Details
      </div>
      {loading ? (
        <div className="detailsdialog__loader">
          <CircularProgress />
        </div>
      ) : (
        <Stack flexDirection="column" className="detailsdialog__content">
          <UserDetailsRow label="Username" value="john_doe" />
          <UserDetailsRow label="Email" value="john@example.com" />
          <UserDetailsRow label="Net Balance" value="Rs 30,000" />
        </Stack>
      )}
    </div>
  );
};

const Payments = () => {
  return (
    <>
      <Box className="chatbot__component flex justify-center items-center bg-[#dcdfe2]">
        <div className="bg-white p-10 rounded-md shadow">
            <UserDetailsDialog />
        </div>
      </Box>
    </>
  );
};

export default Payments;
