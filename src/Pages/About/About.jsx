import Achievement from "../../Components/Achievement/Achievement";
import Contact from "../../Components/Contact/Contact";
import Navbar from "../../Components/Nav/Navbar";
import Team from "../../Components/Team/Team";


const About = () => {

    return (
        <div className="">
            <Navbar />

            <div className="my-10">
                <h1 className="text-center text-4xl my-10">Discover the Crestiq Vibe Difference: Our Story</h1>
                <img src="https://demo.xstheme.com/lacasa/wp-content/uploads/sites/13/2018/01/lamsum.jpg" alt="" className="w-full"/>
                
            </div>

            <div>
                <Team/>
                <Achievement/>
                <Contact/>
            </div>
        </div>
    );
};
export default About;