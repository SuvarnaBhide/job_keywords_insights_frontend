// Customize Dialog styles here
// eslint-disable-next-line no-unused-vars
const Dialog = (theme) => {
    return {
      MuiDialog: {
        styleOverrides: {
          // Override styles for MuiDialog-container
          backdrop: {
            opacity: 1,
            backgroundColor: 'rgba(0, 0, 0, 0)'
          },
          container: {
            backgroundColor: 'rgba(19, 41, 61, 0.15)',
            width: '100%'
          },
          paper: {
            borderRadius: '8px',
            border: '1px solid rgba(0, 0, 0, 0.23)',
            background: '#FFF',
            boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)',
            maxWidth: '100%',
            overflow: 'hidden'
          }
        }
      }
    };
  };
  
  export default Dialog;
  