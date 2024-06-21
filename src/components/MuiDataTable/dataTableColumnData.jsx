import { ReactComponent as ReactLogo } from '../../assets/react.svg';

export const keywordsColumnData = [
    {
        name: "Keyword",
        options: {
            customBodyRender: (value) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ReactLogo width={30} height={30} className="mr-5" style={{ borderRadius: '6px' }} />
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
                    <p className="capitalize px-3 py-1 inline-block rounded-[6px] bg-[#C9F7F5] text-[#1BC5BD]">
                        <strong>{value}</strong> Occurrences
                    </p>
                )
            }
        }
    },
];