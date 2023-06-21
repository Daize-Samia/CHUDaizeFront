import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from './PrivateRoute';


// render - dashboard
const DashboardDefaultOld = Loadable(lazy(() => import('pages-old/dashboard')));
const DashboardDefault = Loadable(lazy(() => import('pages/addPatient')));

// Patient
const ListPatient = Loadable(lazy(() => import('pages/listPatient')));
const Observation = Loadable(lazy(() => import('pages/observation')));
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const Charts = Loadable(lazy(() => import('pages/charts')));
const RendezVous = Loadable(lazy(() => import('pages/rendezVous')));
const PatientInfo = Loadable(lazy(()=> import('pages/patientInfo')));
const ModifPatient = Loadable(lazy(()=> import('pages/modifPatient')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages-old/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages-old/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages-old/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages-old/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages-old/components-overview/AntIcons')));




// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
        {
            path: '/patient',
            element: <DashboardDefault />
        },
        {
            path: '/listPatient',
            element: <ListPatient />
        },
        {
            path: '/observation',
            element: <Observation />
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
        {
            path: '/diagnosticChart',
            element: <Charts/>
        },
        {
            path: '/rendezVous',
            element: <RendezVous/>

        },
        {
            path: '/patientInfo/:iP',
            element: <PatientInfo/>
        },
        {
            path: '/patientmodif',
            element: <ModifPatient/>
        },
        // ======= Template route, For reference ====== //
        {
            path: '/old',
            element: <DashboardDefaultOld />
        },
        {
            path: 'old/color',
            element: <Color />
        },
        {
            path: 'old/dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefaultOld />
                }
            ]
        },
        {
            path: 'old/sample-page',
            element: <SamplePage />
        },
        {
            path: 'old/shadow',
            element: <Shadow />
        },
        {
            path: 'old/typography',
            element: <Typography />
        },
        {
            path: 'old/icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
