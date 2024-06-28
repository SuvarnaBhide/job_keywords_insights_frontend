/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../styles/index.css';
import getMuiDataTableTheme from '../../theme/MuiDataTable/dataTableTheme';
import { dataTableOptions } from '../../theme/MuiDataTable/dataTableOptions';
import { keywordRowData } from '../common/MuiDataTable/dataTableRowData';
import { keywordColumnData } from '../common/MuiDataTable/dataTableColumnData';
import { useParams, useNavigate } from 'react-router-dom';
import { getData } from '../../app/axios/axios';
import { CircularProgress } from '@mui/material';
import useKeywordsDetails from '../../app/hooks/useKeywordsDetails';
const KeywordDetails = () => {
    const { keyword } = useSelector((state) => state.keywords);
    const navigate = useNavigate();
    const { keywordDetailsArray, loading } = useKeywordsDetails();
    const columnsWithClickHandling = keywordColumnData.map((column) => ({
        ...column,
        options: {
            ...column.options,
            customBodyRender: (value, tableMeta, updateValue) => {
                if (column.name === 'Filename') {
                    return (
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleCellClick()}
                        >
                            {column.options.customBodyRender ? column.options.customBodyRender(value, tableMeta, updateValue) : value}
                        </div>
                    );
                }
                return column.options?.customBodyRender ? column.options.customBodyRender(value, tableMeta, updateValue) : value;
            }
        }
    }));

    const handleCellClick = () => {
        navigate('/trending_job_keywords/all_keywords/keyword/file', { state: '../assets/JD 1.txt' });
    };

    return (
            <div className='py-10 min-h-screen grid place-items-center'>
                <div className="w-10/12 max-w-4xl mb-4">
                <div className="flex items-center justify-between m-4">
                    <div>
                        <p className="text-[18px] font-medium mb-2">Full Stack Developer Job Profiles for <strong>{keyword}</strong></p>
                        <p className="text-sm text-gray-600"><strong>50 </strong>Results Found</p>
                    </div>
                    <button disabled={true} className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-[12px] ${true ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1890D4]'}`}>
                        Change Keyword
                    </button>
                </div>
            </div>
                {loading ? <CircularProgress /> : <div className='w-10/12 max-w-4xl'>
                    <ThemeProvider theme={getMuiDataTableTheme()}>
                        <MUIDataTable
                            data={keywordDetailsArray}
                            columns={columnsWithClickHandling}
                            options={dataTableOptions}
                        />
                    </ThemeProvider>
                </div>}
            </div>
    );
}

export default KeywordDetails;
