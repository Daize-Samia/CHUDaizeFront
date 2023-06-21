import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from 'store/slices/authSlice';
import { Navigate } from 'react-router-dom';

// render - login
const AuthLoginOld = Loadable(lazy(() => import('pages-old/authentication/Login')));
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
const AuthRegisterOld = Loadable(lazy(() => import('pages-old/authentication/Register')));

function AlreadyLoggedIn({ children }) {
    const { user, token } = useSelector(selectUserAndToken);
    if (user && user.firstname && token) {
        // already logged in so redirect to dashboard
        return <Navigate to="/" replace />
    }

    // Not logged in so return child components
    return children;
}

// ==============================|| AUTH ROUTING ||============================== //
const LoginRoutes = {
    path: '/',
    element: <AlreadyLoggedIn><MinimalLayout /></AlreadyLoggedIn>,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        },
        // ======= Template route, For reference ====== //
        {
            path: 'login-old',
            element: <AuthLoginOld />
        },
        {
            path: 'register-old',
            element: <AuthRegisterOld />
        }
    ]
};

export default LoginRoutes;
