import colors from '@/utils/colors'
import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const LoadingComponent = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100px', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress sx={{ color: colors.primary }} />
        </Box>
    )
}

export default LoadingComponent