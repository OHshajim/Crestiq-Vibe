import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Nav/Navbar";
import Footer from "../../Components/Footer/Footer";
const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;