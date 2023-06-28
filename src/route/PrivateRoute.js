import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <FontAwesomeIcon className='loading-icon' icon={faSpinner} />
        )
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;