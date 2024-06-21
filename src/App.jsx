/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/index.css';
import getMuiDataTableTheme from './theme/MuiDataTable/dataTableTheme';
import { dataTableOptions } from './theme/MuiDataTable/dataTableOptions';
import { keywordsRowData } from './components/MuiDataTable/dataTableRowData';
import { keywordsColumnData } from './components/MuiDataTable/dataTableColumnData';


const App = () => {


    return (
            <div className='py-10 min-h-screen grid place-items-center'>
                <div className="w-10/12 max-w-4xl mb-4">
                <div className="flex items-center justify-between m-4">
                    <div>
                        <p className="text-[18px] font-medium mb-2">Keywords for <strong>Full Stack Developer</strong></p>
                        <p className="text-sm text-gray-600"><strong>50 </strong>Keywords Found</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-[12px]">
                        Change Job Profile
                    </button>
                </div>
            </div>
                <div className='w-10/12 max-w-4xl'>
                    <ThemeProvider theme={getMuiDataTableTheme()}>
                        <MUIDataTable
                            data={keywordsRowData}
                            columns={keywordsColumnData}
                            options={dataTableOptions}
                        />
                    </ThemeProvider>
                </div>
            </div>
    );
}

export default App;
