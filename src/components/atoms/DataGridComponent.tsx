import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'

interface Proops {
    total: number;
    data: any[];
    columns: GridColDef[];
}

const DataGridComponent: React.FC<Proops> = ({ total, data, columns }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <DataGrid
                sx={{
                    border: 'none',
                    '&, .MuiDataGrid-cell': {
                        border: 'none',
                    },
                    '.MuiDataGrid-columnHeaders': {
                        borderBottom: 'none',
                    },
                    '.MuiDataGrid-row': {
                        borderBottom: 'none',
                    },
                    '&>.MuiDataGrid-main': {
                        '&>.MuiDataGrid-columnHeaders': {
                            borderBottom: 'none',
                        },

                        '& div div div div >.MuiDataGrid-cell': {
                            borderBottom: 'none',
                        },
                    }
                }}
                rows={data}
                columns={columns}
                checkboxSelection={false}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10, 25, 50, 100]}
            />
        </Box>
    )
}

export default DataGridComponent