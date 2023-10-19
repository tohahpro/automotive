import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouter = ({ children }) => {

    const { user } = useContext(AuthContext)
    const location = useLocation()

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node
};


export default PrivateRouter;