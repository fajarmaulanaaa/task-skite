import colors from '@/utils/colors';
import NavigationData from '@/utils/navigationSidebar';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { Menu, MenuItem } from 'react-pro-sidebar';

const SideBarDekstop = () => {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <div>
            {NavigationData.map((item, index) => (
                <Menu closeOnClick key={index} menuItemStyles={{
                    button: ({ level }) => {
                        if (level === 0)
                            return {
                                margin: '8px 12px', borderRadius: '8px',
                                width: '200px',
                                height: '40px',
                                color: pathname === item.path ? colors.primary : colors.white,
                                backgroundColor: pathname === item.path ? colors.primaryLight : colors.primary,
                                '&:hover': {
                                    backgroundColor: colors.primaryLight,
                                    color: colors.primary
                                }
                            };
                    },
                }}>
                    <MenuItem icon={<item.icon width={30} height={30} />} onClick={() => { router.push(item.path) }}> {item.title}</MenuItem>
                </Menu>
            ))}
        </div>
    )
}

export default SideBarDekstop