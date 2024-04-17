import { Helmet } from "react-helmet-async";
import Achievement from "../../Components/Achievement/Achievement";
import Contact from "../../Components/Contact/Contact";
import Team from "../../Components/Team/Team";


const About = () => {

    return (
        <div>
            <Helmet><title>Crestiq Vibe || About Us</title></Helmet>
            <div className="py-20">
                <h1 className="text-center text-2xl lg:text-4xl my-3" data-aos="fade-in">Discover the Crestiq Vibe Difference: Our Story</h1>
                <img src="https://demo.xstheme.com/lacasa/wp-content/uploads/sites/13/2018/01/lamsum.jpg"
                    alt="" className="w-full" data-aos="fade-in" />
            </div>

            <div className="max-w-[1600px] mx-auto">
                <Team />
                <Achievement />
                <Contact />
            </div>
        </div>
    );
};
export default About;