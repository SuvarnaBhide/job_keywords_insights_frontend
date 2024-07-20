/* eslint-disable no-unused-vars */
import { ReactComponent as ReactLogo } from '../../../assets/react.svg';

export const allKeywordsColumnData = [
    {
        name: "Keyword",
        options: {
            customBodyRender: (value) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
                        {/* <ReactLogo width={30} height={30} className="mr-5" style={{ borderRadius: '6px' }} /> */}
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
                        <p className="capitalize px-3 py-1 inline-block rounded-[6px] bg-[#C9F7F5] text-[#1BC5BD]">
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
                    <p className="capitalize px-3 py-1 inline-block rounded-[6px] bg-[#C9F7F5] text-[#1BC5BD]">
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
                        <p className="capitalize px-3 py-1 inline-block rounded-[6px] bg-[#C9F7F5] text-[#1BC5BD]">
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
                        <p className="capitalize px-3 py-1 inline-block rounded-[6px] bg-[#C9F7F5] text-[#1BC5BD]">
                            <strong>{value}</strong>
                        </p>
                    </div>
                )
            }
        }
    },
];