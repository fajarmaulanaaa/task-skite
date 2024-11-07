import colors from '@/utils/colors';
import { Typography } from '@mui/material';
import React from 'react'

interface Proop {
    text: string;
    color?: string;
}

const TitleTeks: React.FC<Proop> = ({ text, color }) => {
    return (
        <Typography sx={{ fontSize: { xs: '24px', sm: '24px', md: '28px', lg: '32px' }, color: color ?? colors.white, fontWeight: 700 }}>
            {text}
        </Typography>
    );
};

export default TitleTeks