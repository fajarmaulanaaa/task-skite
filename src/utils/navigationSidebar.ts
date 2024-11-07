import HomeOutline from '../../public/icons/home_outline.svg'
import Products from '../../public/icons/folder_open.svg'
import Sales from '../../public/icons/line_chart_up.svg'
import Settings from '../../public/icons/settings.svg'

type NavLink = {
    title: string;
    icon?: any;
    path: string;
};

const NavigationData: NavLink[] = [
    {
        title: 'Home',
        icon: HomeOutline,
        path: '/',
    },
    {
        title: 'Products',
        icon: Products,
        path: '/products',
    },
    {
        title: 'Sales',
        icon: Sales,
        path: '/sales',
    },
    {
        title: 'Settings',
        icon: Settings,
        path: '/settings',
    },

]
export default NavigationData;