import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import '../../../styles/CustomDialog.css';
import { ReactComponent as CrossIcon } from '../../../assets/cross_icon.svg';
import { IconButton } from '@mui/material';

export default function CustomDialog(props) {
  const {
    children,
    openDialog,
    handleCloseDialog,
    padding = '36px 40px',
    crossIconBtnStyle = { top: '8px', right: '8px' },
    crossIconStyle = { width: '10px', height: '10px' }
  } = props;

  return (
    <React.Fragment>
      <Dialog
        className="dialog"
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="dialog__container" style={{ padding: padding }}>
          <IconButton
            onClick={handleCloseDialog}
            style={crossIconBtnStyle}
            className="dialog__closeiconbtn"
          >
            <CrossIcon style={crossIconStyle} className="dialog__closeicon" />
          </IconButton>
          <div className="dialog__content">{children}</div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
