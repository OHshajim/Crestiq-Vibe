import Header from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
import Navbar from "../../Components/Nav/Navbar";

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