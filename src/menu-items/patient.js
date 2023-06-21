import {UserOutlined, OrderedListOutlined,ScheduleOutlined,EyeOutlined} from '@ant-design/icons';
const icons = {
        UserOutlined,
        
        OrderedListOutlined,
        ScheduleOutlined,
        EyeOutlined

};


// ==============================|| MENU ITEMS - AjouterPatient ||============================== //

const patient = {
        id: 'group-patient',
        title: 'Patient',
        type: 'group',
        children: [

            {
                id: 'ajouterPatient',
                title: 'Ajouter Patient',
                type: 'item',
                url: '/patient',
                icon: icons.UserOutlined,
                breadcrumbs: false
            }, 
            {
                id: 'list-patient',
                title: 'Liste des Patients',
                type: 'item',
                url: '/listpatient',
                icon: icons.OrderedListOutlined,
                breadcrumbs: false
            },
            {
                id:'observation',
                title:'Observation',
                type:'item',
                url:'/observation',
                icon:icons.EyeOutlined,
                breadcrumbs: false
                
            }
            
    
        ]
}

export default patient ;