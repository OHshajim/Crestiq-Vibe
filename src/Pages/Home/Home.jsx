import { Helmet } from "react-helmet-async";
import Header from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
import Navbar from "../../Components/Nav/Navbar";
import { useState } from "react";

const Home = () => {
    const [fix, setFix] = useState(false)
    function setFixed() {
        if (window.scrollY > 100) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <div>
            <Helmet><title>Crestiq Vibe || Home</title></Helmet>
            <div className={fix?"fixed z-10 w-full bg-black duration-500":"fixed z-10 w-full duration-200"}>
                <Navbar />
            </div>
            <Header />

            {/* body */}
            <Estates />

        </div>
    );
};

export default Home;