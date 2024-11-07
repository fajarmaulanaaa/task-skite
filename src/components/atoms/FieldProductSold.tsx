import { Box, Divider } from '@mui/material'
import React from 'react'
import RegulerTeks from './RegulerText'
import colors from '@/utils/colors'
interface Proops {
    name: string, value: string
}

const FieldProductSold: React.FC<Proops> = ({ name, value }) => {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', gap: '5px',
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <RegulerTeks color={colors.textOff} text={name} size='14px' />
                <RegulerTeks color={colors.textOff} text={value} size='14px' />
            </Box>
            <Divider sx={{ width: '100%' }} />
        </Box>
    )
}

export default FieldProductSold