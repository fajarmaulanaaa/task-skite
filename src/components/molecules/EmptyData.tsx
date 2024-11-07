import { Box } from '@mui/material'
import React from 'react'
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';
import colors from '@/utils/colors';
import TitleTeks from '../atoms/TitleText';
const EmptyData = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <SearchOffOutlinedIcon sx={{ color: colors.primary, width: 48, height: 48 }} />

            <TitleTeks text='No Data Found' color={colors.primary} />
        </Box>
    )
}

export default EmptyData