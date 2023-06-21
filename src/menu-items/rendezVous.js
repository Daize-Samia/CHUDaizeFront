import {UserOutlined, OrderedListOutlined,ScheduleOutlined,EyeOutlined} from '@ant-design/icons';
const icons = {
        UserOutlined,       
        OrderedListOutlined,
        ScheduleOutlined,
        EyeOutlined

};


// ==============================|| MENU ITEMS - Rendez Vous ||============================== //

const patient = {
        id: 'group-patient',
        title: 'Rendez-Vous',
        type: 'group',
        children: [

            
            {
                id: 'rendez-vous',
                title: 'Rendez-vous',
                type: 'item',
                url: '/rendezVous',
                icon: icons.ScheduleOutlined,
                breadcrumbs: false
            },
            
            
    
        ]
}

export default patient ;