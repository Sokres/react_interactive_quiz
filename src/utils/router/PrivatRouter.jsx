import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../../main";


const PrivatRouter = () => {
    const {user} = useContext(Context)
    // console.log(user);
    return (
        user._isAuth ? <Outlet /> : <Navigate to='/auth' />
    );
};

export default PrivatRouter;