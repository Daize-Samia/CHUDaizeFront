import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from 'store/slices/authSlice';

function PrivateRoute({ children }) {
    const { user, token } = useSelector(selectUserAndToken);
    if (!user || !token) {
        // not logged in so redirect to login page
        return <Navigate to="/login" replace />
    }

    // authorized so return child components
    return children;
}

export { PrivateRoute };
