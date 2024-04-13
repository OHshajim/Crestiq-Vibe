import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);

    if (isLoading) {
        return <div className="flex justify-center items-center my-20"><span className="w-20 loading loading-spinner text-error"></span></div>
    }
    if (user) {
        return children ; 
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivetRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivetRoute;