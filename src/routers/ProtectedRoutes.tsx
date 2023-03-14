
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const {isAuthenticated} = useSelector(
        (state: any) => state.loginReducer
    );
    return (
        isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />
  )
}

export default ProtectedRoutes
