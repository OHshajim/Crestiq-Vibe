import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import EstateDetails from "../EstateDetails/EstateDetails";
import PrivetRoute from "./PrivetRoute";
import About from "../About/About";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/Data/Estate.json')
            },
            {
                path: "/EstateDetails/:id",
                element: <PrivetRoute><EstateDetails /></PrivetRoute>,
                loader: () => fetch('/Data/Estate.json')
            },
            {
                path: "/update",
                element: <PrivetRoute> <UpdateProfile /> </PrivetRoute>
            },
            {
                path: "/aboutus",
                element: <PrivetRoute> <About/> </PrivetRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },
]);

export default Router;