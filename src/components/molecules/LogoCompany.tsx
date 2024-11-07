import { Box } from '@mui/material'
import React from 'react'
import LogoComponent from '../atoms/LogoComponent'
import TitleLogo from '../atoms/TitleLogo'

interface Proops {
    titleColor?: string;
}

const LogoCompany: React.FC<Proops> = ({ titleColor }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', mt: '18px', mb: '12px', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <LogoComponent />
            <TitleLogo titleColor={titleColor} />
        </Box>
    )
}

export default LogoCompany