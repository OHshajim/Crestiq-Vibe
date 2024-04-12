import Header from "../../Components/Banner/Banner";
import Navbar from "../../Components/Nav/Navbar";
import Estates from "../Estates/Estates";

const Home = () => {
    return (
        <div>
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