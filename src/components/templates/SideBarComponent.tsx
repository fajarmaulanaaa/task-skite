import colors from '@/utils/colors'
import NavigationData from '@/utils/navigationSidebar'
import { Box, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import LogoCompany from '../molecules/LogoCompany'
import SideBarDekstop from '../organisms/SideBarDekstop'
import SideBarMobile from '../organisms/SideBarMobile'

export default function SideBarComponent() {

    const isMobile = useMediaQuery("(max-width: 768px)");
    if (isMobile) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white }}>
                <SideBarMobile />
                <LogoCompany titleColor={colors.primary} />
            </Box>
        )
    } else {
        return (
            <Sidebar backgroundColor={colors.primary}>
                <LogoCompany titleColor={colors.white} />
                <SideBarDekstop />
            </Sidebar>
        )
    }

}