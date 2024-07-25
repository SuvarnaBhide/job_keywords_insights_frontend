/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack } from '@mui/material';
import '../styles/Pages.css';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/Dialog.css';

const UserDetailsRow = ({ label, value }) => {
    return (
      <Stack flexDirection="row" className="detailsdialog__row">
        <div className="detailsdialog__row__key">
          {label}
        </div>
        <div variant="body1" className="detailsdialog__row__value">
          {value}
        </div>
      </Stack>
    );
  };

const UserDetailsDialog = ({ loading }) => {

  return (
    <div className="detailsdialog">
      <div className="detailsdialog__title">
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
      <Box className="page-container-styles flex justify-center items-center bg-[#dcdfe2]">
        <div className="bg-white p-10 rounded-md shadow">
            <UserDetailsDialog />
        </div>
      </Box>
    </>
  );
};

export default Payments;
