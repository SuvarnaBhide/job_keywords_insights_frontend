export const dataTableOptions = {
    selectableRows: false,
    resizableColumns: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    search: false,
    pagination: true,
    responsive: 'standard',
    tableBodyHeight: '400px',
    tableBodyMaxHeight: '400px',
    setTableProps: () => ({
        style: {
            height: '100%',
            width: '800px'
        },
    }),
};