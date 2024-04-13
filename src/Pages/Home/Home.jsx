import { Helmet } from "react-helmet-async";
import Header from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
import Navbar from "../../Components/Nav/Navbar";

const Home = () => {
    return (
        <div>
            <Helmet><title>Crestiq Vibe || Home</title></Helmet>
            <div className="fixed z-10 w-full">
                <Navbar />
            </div>
            <Header />

            {/* body */}
            <Estates />

        </div>
    );
};

export default Home;