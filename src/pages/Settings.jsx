/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/Dialog.css';

const UserDetailsRow = ({ label, value }) => {
    return (
      <Stack flexDirection="row" className="detailsdialog__row">
        <div className="detailsdialog__row__key">
          {label}
        </div>
        <div className="detailsdialog__row__value">
          {value}
        </div>
      </Stack>
    );
  };

const UserDetailsDialog = ({ userDetails, loading }) => {

  return (
    <div className="detailsdialog">
      <div className="detailsdialog__title">
        User Details
      </div>
      {loading ? (
        <div className="detailsdialog__loader">
          <CircularProgress />
        </div>
      ) : (
        <Stack flexDirection="column" className="detailsdialog__content">
          <UserDetailsRow label="Username" value="john_doe" />
          <UserDetailsRow label="Email" value="john@example.com" />
        </Stack>
      )}
    </div>
  );
};

const Settings = () => {
    return (
        <>
          <Box className="w-full px-7 flex justify-center items-center bg-[#dcdfe2]">
            <div className="bg-white p-10 rounded-md shadow">
                <UserDetailsDialog />
            </div>
          </Box>
        </>
    );
};

export default Settings;
