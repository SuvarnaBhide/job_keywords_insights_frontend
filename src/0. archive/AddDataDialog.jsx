/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import '../../../styles/AddDialog.css';
import {
  TextField,
  styled
} from '@mui/material';
import { validateForm } from '../../../app/utils/formValidator';
import DialogActionButtons from '../components/common/Dialogs/DialogActionButtons';
import useDataStorageOperations from '../../../app/hooks/useDataStorageOperations';

const CustomTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    height: '42px'
  }
}));

const AddDialog = ({ handleCloseDialog }) => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const { addData } = useDataStorageOperations();

  const [formErrors, setFormErrors] = useState({
    name: { error: false, message: '' },
  });

  const [apiPayload, setApiPayload] = useState();

  const textFieldStyle = {
    sx: {
      '&::placeholder': {
        color: 'rgba(0, 0, 0, 0.60)',
        fontSize: '16px'
      },
      fontSize: '16px',
      padding: '6.5px 12px'
    }
  };

  const isFormValid = () => {
    return validateForm(formData, setFormErrors);
  };

  useEffect(() => {
    const payload = {
      "name": formData.name,
    };

    setApiPayload(payload);

  }, [formData.name]);

  return (
    <div className="add__dialog">

        <div>
          <div>
            <CustomTextField
              variant="outlined"
              className="add__dialog__formInputs"
              inputProps={textFieldStyle}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Name"
              error={formErrors.name.error}
              helperText={formErrors.name.error ? formErrors.name.message : ''}
            />
          </div>

          <DialogActionButtons
            submitBtnText="Add Data"
            cancelBtnText="Cancel"
            onSubmitAction={addData}
            handleCloseDialog={handleCloseDialog}
            checkValidity={true}
            isFormValid={isFormValid}
            align="right"
            apiPayload={apiPayload}
          />
        </div>
    </div>
  );
};

export default AddDialog;
