'use client'
import colors from '@/utils/colors';
import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'
interface Proops {
    titleColor?: string;
}

const TitleLogo: React.FC<Proops> = ({ titleColor }) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <Typography sx={{ fontSize: isMobile ? '18px' : '24px', fontWeight: 700, color: titleColor ? titleColor : colors.white }}>BeLoundry</Typography>
    )
}

export default TitleLogo