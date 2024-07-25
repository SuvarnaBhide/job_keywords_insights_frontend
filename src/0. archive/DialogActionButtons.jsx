/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../../styles/DialogActionButtons.css';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const DialogActionButtons = (props) => {
  const {
    align,
    isFormValid,
    checkValidity = false,
    submitBtnText,
    cancelBtnText,
    onSubmitAction,
    handleCloseDialog,
    apiPayload = null,
  } = props;
  const dispatch = useDispatch();

  const onSubmitButtonClick = async (e) => {
    e.preventDefault();
    if (checkValidity && !isFormValid()) {
      return;
    }
    const response = await onSubmitAction(apiPayload);
    handleCloseDialog();
  };

  return (
    <>
      <div
        className="dialog__actionbtns"
        style={{ alignSelf: align === 'right' ? 'flex-end' : '' }}
      >
        <Button
          onClick={handleCloseDialog}
          className="dialog__cancelbtn"
          variant="outlined"
          color="primary"
        >
          {cancelBtnText}
        </Button>
        <Button
          onClick={onSubmitButtonClick}
          className="dialog__confirmbtn"
          variant="contained"
          color="primary"
        >
          {submitBtnText}
        </Button>
      </div>
    </>
  );
};

export default DialogActionButtons;
