import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

interface Proops {
    children: ReactNode
    width?: string
}

const ContainerProduct: React.FC<Proops> = ({ children, width }) => {
    return (
        <Box sx={{
            borderRadius: '12px', backgroundColor: 'white',
            width: width ?? '100%',
            boxShadow: [
                '1.9px 3.79px 6.63px 4.74px #EFEFEF40',
                '1.9px 3.79px 9.48px 1.9px #A7A7A717',
            ],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {children}
        </Box>
    )
}

export default ContainerProduct