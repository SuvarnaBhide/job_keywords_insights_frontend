/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/index.css';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { setKeyword } from '../../app/redux/slices/keywordsSlice';
import useKeywordsDetails from '../../app/hooks/useKeywordsDetails'; 
import CustomDialog from '../common/Dialogs/CustomDialog';
import AddDataDialog from '../common/Dialogs/AddDataDialog';
import { getAllDataAction } from '../../app/services/dataService';
import useDataStorageOperations from '../../app/hooks/useDataStorageOperations';
import { ThemeProvider } from '@mui/material/styles';
import getMuiDataTableTheme from '../../theme/MuiDataTable/dataTableTheme';
import { dataTableOptions } from '../../theme/MuiDataTable/dataTableOptions';
import '../../styles/index.css';
import MUIDataTable from "mui-datatables";

const AddReadData = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { allData } = useSelector((state) => state.data);
    const [openDialog, setOpenDialog] = useState(false);
    const {loading, setLoading } = useDataStorageOperations();

    const handleCellClick = (keyword) => {
        dispatch(setKeyword(keyword));
        navigate(`/trending_job_keywords/all_keywords/${keyword}`);
    };

    useEffect(() => {
        setLoading(true);
        dispatch(getAllDataAction());
        setLoading(false);
    }, [dispatch, setLoading]);

    return (
        <div className='py-10 min-h-screen grid place-items-center'>
            <div className="w-10/12 max-w-4xl mb-4">
                <div className="flex items-center justify-between m-4">
                    <div>
                        <p className="text-[18px] font-medium mb-2">Data Storage</p>
                        <p className="text-sm text-gray-600">Store And Retrieve Data</p>
                    </div>
                    <button onClick={() => setOpenDialog(true)} className={`bg-[#1890D4] hover:bg-[#10608e] text-white font-semibold py-2 px-4 rounded text-[12px] ${false ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#10608e]'}`}>
                        Add Data
                    </button>
                </div>
            </div>
            {loading? <CircularProgress /> : <div className='w-10/12 max-w-4xl'>
                <ThemeProvider theme={getMuiDataTableTheme()}>
                    <MUIDataTable
                        data={allData.map((data) => [data])}
                        columns={['All Data']}
                        options={dataTableOptions}
                    />
                </ThemeProvider>
            </div>}

            <CustomDialog
                openDialog={openDialog}
                handleCloseDialog={() => setOpenDialog(false)}
                padding="24px 28px"
                crossIconStyle={{ width: '16px', height: '16px' }}
                crossIconBtnStyle={{ top: '20px', right: '24px' }}
            >
                <AddDataDialog
                    handleCloseDialog={() => setOpenDialog(false)}
                />
            </CustomDialog>

        </div>
    );
}

export default AddReadData;
