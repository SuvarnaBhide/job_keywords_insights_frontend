/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/index.css';
import getMuiDataTableTheme from '../theme/MuiDataTable/dataTableTheme';
import { dataTableOptions } from '../theme/MuiDataTable/dataTableOptions';
import { keywordRowData } from '../components/MuiDataTable/dataTableRowData';
import { keywordColumnData } from '../components/MuiDataTable/dataTableColumnData';
import { useParams, useNavigate } from 'react-router-dom';
import { getData } from '../app/axios/axios';


const KeywordDetails = () => {

    const { keyword } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState(keywordRowData);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData('keyword/' + keyword);
                if (data) {
                    const rowData = data.map(
                        item => [item.Company, item["Job Title"], item.Filename]
                    );
                    setData(rowData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [keyword]);

    return (
            <div className='py-10 min-h-screen grid place-items-center'>
                <div className="w-10/12 max-w-4xl mb-4">
                <div className="flex items-center justify-between m-4">
                    <div>
                        <p className="text-[18px] font-medium mb-2">Keywords for <strong>Full Stack Developer</strong></p>
                        <p className="text-sm text-gray-600"><strong>50 </strong>Keywords Found</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-[12px]">
                        Clicked on keyword: {keyword}
                    </button>
                </div>
            </div>
                <div className='w-10/12 max-w-4xl'>
                    <ThemeProvider theme={getMuiDataTableTheme()}>
                        <MUIDataTable
                            data={data}
                            columns={columnsWithClickHandling}
                            options={dataTableOptions}
                        />
                    </ThemeProvider>
                </div>
            </div>
    );
}

export default KeywordDetails;
