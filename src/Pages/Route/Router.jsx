import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import EstateDetails from "../EstateDetails/EstateDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage/> ,
        children: [
            {
                path: "/",
                element: <Home />,
                loader :()=>fetch('../../../public/Data/Estate.json')
            },
            {
                path: "/EstateDetails/:id",
                element: <EstateDetails />,
                loader :()=>fetch('../../../public/Data/Estate.json')
            },
            {
                path: "/update",
                element: <UpdateProfile />
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
        ]
    },
]);

export default Router;