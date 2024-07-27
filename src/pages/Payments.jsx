/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, useTheme } from '@mui/material';
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

  const theme = useTheme();

  return (
    <>
      <Box className={`w-full px-7 flex justify-center items-center bg-[${theme.palette.grey.main}] py-[28px]`}>
        <div className="bg-white p-10 rounded-md shadow">
            <UserDetailsDialog />
        </div>
      </Box>
    </>
  );
};

export default Payments;
