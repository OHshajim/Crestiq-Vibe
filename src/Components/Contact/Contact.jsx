import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdForwardToInbox } from "react-icons/md";

const Contact = () => {
    return (
        <div className="mb-20" data-aos="fade-up">
            <div className="flex flex-1 flex-col-reverse xl:flex-row px-4 md:px-8 gap-10">

                <div className="flex flex-1 flex-col my-8 lg:my-20 space-y-2 md:space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="border w-14 md:w-28"></div>
                        <h3 className="text-lg md:text-2xl">Get In touch</h3>
                    </div>
                    <h1 className="text-2xl lg:text-4xl font-bold">Contact With Us</h1>
                    <p></p>
                    <div className="stats stats-vertical lg:stats-horizontal bg-transparent ">

                        <div className="stat">
                            <div className="stat-title flex items-center gap-3"><span className="text-2xl"><FaMapLocationDot /></span> Location</div>
                            <div className="my-3 font-bold text-lg">Charleston, South Carolina, USA</div>
                            <div className="stat-desc">Our Office - 36/B Charleston , USA</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title flex items-center gap-3" ><span className="text-xl"><FaPhoneAlt/></span> Phone Number</div>
                            <div className="my-3 font-bold text-lg">+001105082022 <br />+001222508212</div>
                            <div className="stat-desc">10 Am - 4pm</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title flex items-center gap-3"><span className="text-2xl"><MdForwardToInbox/></span> Email</div>
                            <div className="my-3 font-bold text-lg">CrestiqVibe@gmail.com</div>
                            <div className="stat-desc">24/7 Here </div>
                        </div>

                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/Jd28hSj/bg-img.jpg" alt="building" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Contact;