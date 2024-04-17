import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Nav/Navbar";
import { ToastContainer } from "react-toastify";
const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Root;