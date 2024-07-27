/* eslint-disable no-unused-vars */

import { default as PALETTE } from "../../../theme/palette";

const palette = PALETTE('light');

export const allKeywordsColumnData = [
    {
        name: "Keyword",
        options: {
            customBodyRender: (value) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
                        <div className="text-[14px] font-semibold">
                            <p>{value}</p>
                        </div>
                    </div>
                );
            }
        }
    },
    {
        name: "Occurrences",
        options: {
            customBodyRender: (value) => {
                return (
                    <div>
                        <p 
                            className={`capitalize text-black px-3 py-1 inline-block rounded-[6px] text-[${palette.muiDataTable.darkGreen}]`}
                            style={{ 
                                backgroundColor: `${palette.muiDataTable.lightGreen}`,
                                color: `${palette.muiDataTable.darkGreen}`
                            }}
                        >
                            <strong>{value}</strong> Occurrences
                        </p>
                    </div>
                )
            }
        }
    },
];

export const keywordColumnData = [
    {
        name: "Company"
    },
    {
        name: "Job Title"
    },
    {
        name: "Filename",
        options: {
            customBodyRender: (value) => {
                return (
                    <p className={`capitalize px-3 py-1 inline-block rounded-[6px] bg-[${palette.muiDataTable.lightGreen}] text-[${palette.muiDataTable.darkGreen}]`}
                        style={{ backgroundColor: `${palette.muiDataTable.lightGreen}`, color: `${palette.muiDataTable.darkGreen}` }}
                    >
                        {value}
                    </p>
                )
            }
        }
    },
];

export const allQuizzesColumnData = [
    {
        name: "Quiz Name",
        options: {
            customBodyRender: (value) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
                        <div className="text-[14px] font-semibold">
                            <p>{value}</p>
                        </div>
                    </div>
                );
            }
        }
    },
    {
        name: "Details",
        options: {
            customBodyRender: (value) => {
                return (
                    <div>
                        <p className={`capitalize px-3 py-1 inline-block rounded-[6px] bg-[${palette.muiDataTable.lightGreen}] text-[${palette.muiDataTable.darkGreen}]`}
                            style={{ backgroundColor: `${palette.muiDataTable.lightGreen}`, color: `${palette.muiDataTable.darkGreen}` }}
                        >
                            <strong>{value}</strong>
                        </p>
                    </div>
                )
            }
        }
    },
];

export const allAttemptsColumnData = [
    {
        name: "Date & Time",
        options: {
            customBodyRender: (value) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
                        <div className="text-[14px]">
                            <p>{value}</p>
                        </div>
                    </div>
                );
            }
        }
    },
    {
        name: 'Quiz Name',
        options: {
            customBodyRender: (value) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
                        <div className="text-[14px] font-semibold">
                            <p>{value}</p>
                        </div>
                    </div>
                );
            }
        }
    },
    {
        name: 'Score'
    },
    {
        name: "Details",
        options: {
            customBodyRender: (value) => {
                return (
                    <div>
                        <p className={`capitalize px-3 py-1 inline-block rounded-[6px] bg-[${palette.muiDataTable.lightGreen}] text-[${palette.muiDataTable.darkGreen}]`}
                            style={{ backgroundColor: `${palette.muiDataTable.lightGreen}`, color: `${palette.muiDataTable.darkGreen}` }}
                        >
                            <strong>{value}</strong>
                        </p>
                    </div>
                )
            }
        }
    },
];