import { Navigate } from 'react-router-dom';
import { getSessionStorageData } from '../../utility/localStorageUtility';
import { isEmpty } from 'lodash';
import { LOGIN } from '../../utility/constants';

const PrivateRoute = ({ children, isAuthenticated }) => {
    const checkAuthenticated = () => {
        const data = getSessionStorageData(LOGIN)
        if (!isEmpty(data)) {
            return true;
        }
        return false
    }
    if (!checkAuthenticated()) {
        // Redirect to login page if not authenticated
        return <Navigate to="/" />;
    }

    // If authenticated, allow access to the route
    return children;
};

export default PrivateRoute;