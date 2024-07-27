/* eslint-disable no-unused-vars */

const theme = {
    palette: {
        muiDataTable: {
            lightGreen: '#C9F7F5',
            darkGreen: '#1BC5BD'
        }
    }
}

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
                        <p className={`capitalize px-3 py-1 inline-block rounded-[6px] bg-[${theme.palette.muiDataTable.lightGreen}] text-[${theme.palette.muiDataTable.darkGreen}]`}>
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
                    <p className={`capitalize px-3 py-1 inline-block rounded-[6px] bg-[${theme.palette.muiDataTable.lightGreen}] text-[${theme.palette.muiDataTable.darkGreen}]`}>
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
                        <p className={`capitalize px-3 py-1 inline-block rounded-[6px] bg-[${theme.palette.muiDataTable.lightGreen}] text-[${theme.palette.muiDataTable.darkGreen}]`}>
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
                        <p className={`capitalize px-3 py-1 inline-block rounded-[6px] bg-[${theme.palette.muiDataTable.lightGreen}] text-[${theme.palette.muiDataTable.darkGreen}]`}>
                            <strong>{value}</strong>
                        </p>
                    </div>
                )
            }
        }
    },
];