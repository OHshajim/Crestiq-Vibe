import Achievement from "../../Components/Achievement/Achievement";
import Contact from "../../Components/Contact/Contact";
import Navbar from "../../Components/Nav/Navbar";
import Team from "../../Components/Team/Team";


const About = () => {

    return (
        <div className="">
            <Navbar />


            <div>
                <Contact/>
                <Team/>
                <Achievement/>
            </div>
        </div>
    );
};
export default About;