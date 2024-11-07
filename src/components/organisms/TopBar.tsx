'use client'
import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import TitleTeks from '../atoms/TitleText'
import colors from '@/utils/colors'
import { capitalizeTitle } from '@/utils/helper'
import User from '../../../public/icons/user.svg'
import RegulerTeks from '../atoms/RegulerText'
import authStore from '@/context/useAuthStore'

const TopBar = () => {
    const pathname = usePathname()
    const { handleGetUser, loading } = authStore()
    const user = typeof window !== undefined ? sessionStorage.getItem('name') : null

    useEffect(() => {
        if (!user) {
            handleGetUser()
        }
    }, [])
    const mainPath = pathname.split('/')[1];
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.white, p: '20px' }}>
            <TitleTeks color={colors.black} text={pathname === '/' ? 'Home' : mainPath ? capitalizeTitle(mainPath) : ''} />

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
                <User width={30} height={30} color={colors.black} />
                <RegulerTeks text={loading ? 'Loading..' : user ?? ''} color={colors.primary} />
            </Box>
        </Box>
    )
}

export default TopBar