
import { Navigate } from "react-router-dom";
import { isExpired } from "react-jwt";

const PrivateRoute = ({ children }) => {
    let token = localStorage.getItem("token");
    let isExpire = isExpired(token);
    if(isExpire) {
        return  <Navigate to={`/SignIn`} replace={true} />;
    }
    return token ?  children : <Navigate to={`/SignIn`} replace={true} />;
};

export default PrivateRoute;