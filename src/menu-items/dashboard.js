// assets
import { DashboardOutlined , UserOutlined, OrderedListOutlined,ScheduleOutlined} from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    UserOutlined,
    OrderedListOutlined,
    ScheduleOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Tableau de bord',
            type: 'item',
            url: '/dashboard',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }

    ]
};

export default dashboard;
