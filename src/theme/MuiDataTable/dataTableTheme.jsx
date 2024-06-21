import { createTheme } from '@mui/material/styles';

const getMuiDataTableTheme = () => createTheme({
    components: {
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-head': {
                        backgroundColor: '#F3F6F9',
                        border: 'none',
                        padding: '8px 16px',
                        '&:first-of-type': {
                            borderTopLeftRadius: '6px',
                            borderBottomLeftRadius: '6px',
                        },
                        '&:last-of-type': {
                            borderTopRightRadius: '6px',
                            borderBottomRightRadius: '6px',
                        },
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: 'none',
                    padding: '16px 16px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    overflowX: 'auto',
                },
            },
        },
    },
});

export default getMuiDataTableTheme;