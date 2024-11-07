'use client'
import colors from '@/utils/colors'
import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import SideBarComponent from './SideBarComponent'
import TopBar from '../organisms/TopBar'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
    const isMobile = useMediaQuery("(max-width: 768px)")
    return (
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: '100vh', bgcolor: colors.SecondaryLight }}>
            <SideBarComponent />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', overflowY: 'auto', width: '100%' }}>
                <TopBar />
                {children}
            </Box>
            <ToastContainer />
        </Box>
    )
}

export default LayoutComponent