'use client'
import colors from '@/utils/colors';
import { Box } from '@mui/material';
import { styled, useMediaQuery } from '@mui/system';

const LogoComponent = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <Box sx={{
            position: 'relative',
            width: isMobile ? 56 : 100,
            height: isMobile ? 33 : 56,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box sx={{
                width: isMobile ? 33 : 56,
                height: isMobile ? 33 : 56,
                backgroundColor: colors.primary,
                borderRadius: '50%',
                border: '4px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} />
            <Box sx={{
                position: 'absolute',
                top: 1,
                right: 1,
                width: isMobile ? 11 : 20,
                height: isMobile ? 11 : 20,
                backgroundColor: colors.error,
                borderRadius: '50%',
                border: '2px solid white',
            }} />
        </Box>
    );
};

export default LogoComponent;
