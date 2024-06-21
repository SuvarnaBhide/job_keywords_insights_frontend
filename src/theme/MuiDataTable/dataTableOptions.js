export const dataTableOptions = {
    selectableRows: false,
    resizableColumns: true,
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
    setTableProps: () => ({
        style: {
            tableLayout: 'auto',
        },
    }),
};