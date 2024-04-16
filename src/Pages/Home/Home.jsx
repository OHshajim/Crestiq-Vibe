import { Helmet } from "react-helmet-async";
import Header from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
import Navbar from "../../Components/Nav/Navbar";
import { useState } from "react";
import Team from "../../Components/Team/Team";
import Achievement from "../../Components/Achievement/Achievement";

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
            <div className={fix?"fixed z-10 w-full bg-[#0f0e0e] duration-500":"fixed z-10 w-full duration-200"}>
                <Navbar />
            </div>

            <Header />

            {/* body */}
            <div className="bg-[#1e1e1edc] py-10">
            <Estates />
            <Team/>
            <Achievement/>
            </div>
        </div>
    );
};

export default Home;