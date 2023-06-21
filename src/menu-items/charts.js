import {PieChartOutlined,BarChartOutlined} from '@ant-design/icons';
const icons = {
       
        
        PieChartOutlined,
        BarChartOutlined

};


// ==============================|| MENU ITEMS - Charts ||============================== //

const patient = {
        id: 'group-patient',
        title: 'Charts',
        type: 'group',
        children: [

            {
                id: 'sexeChart',
                title: 'F/M charte',
                type: 'item',
                url: '/dashboard',
                icon: icons.BarChartOutlined,
                breadcrumbs: false
            }, 
            {
                id: 'diagnosticChart',
                title: 'Diagnostique',
                type: 'item',
                url: '/diagnosticChart',
                icon: icons.PieChartOutlined,
                breadcrumbs: false
            },
            
            
    
        ]
}

export default patient ;