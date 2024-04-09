import Header from "../../Components/Banner/Banner";
import Navbar from "../../Components/Nav/Navbar";

const Home = () => {
    return (
        <div>
            <div className="fixed z-10 w-full">
            <Navbar/>
            </div>
            <Header />

            
        </div>
    );
};

export default Home;