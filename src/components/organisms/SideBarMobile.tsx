import colors from '@/utils/colors';
import { Box, List, ListItem, SwipeableDrawer } from '@mui/material'
import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import IconButtonComponent from '../atoms/IconButtonComponent';
import NavigationData from '@/utils/navigationSidebar';
import { useRouter } from 'next/navigation';
import GeneralButton from '../atoms/GeneralButton';

const SideBarMobile = () => {
    const [isOpenMenuRight, setIsOpenMenuRight] = React.useState(false);
    const router = useRouter()
    const openMenuRight = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setIsOpenMenuRight(open);
    };
    return (
        <Box>
            <IconButtonComponent icon={<MenuOutlinedIcon sx={{ color: colors.primary, width: '28px', height: '28px' }} />} onClick={openMenuRight(true)} />

            <SwipeableDrawer
                anchor={'left'}
                open={isOpenMenuRight}
                onClose={openMenuRight(false)}
                onOpen={openMenuRight(true)}
                PaperProps={{
                    sx: { width: "80%", backgroundColor: colors.primary },
                }} >
                <Box >
                    <List >
                        {
                            NavigationData.map((item, index) => (
                                <ListItem key={index} >
                                    <GeneralButton color={colors.white} variant='text'
                                        onClick={() => {
                                            setIsOpenMenuRight(false)
                                            router.push(item.path);
                                        }} >
                                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}>
                                            <item.icon width={30} height={30} />
                                            {item.title}
                                        </Box>
                                    </GeneralButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </SwipeableDrawer>
        </Box>
    )
}

export default SideBarMobile