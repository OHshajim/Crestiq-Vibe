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
            <div className={fix ? "fixed z-10 w-full bg-[#0f0e0e] duration-500" : "fixed z-10 w-full duration-200"}>
                <Navbar />
            </div>

            <Header />

            {/* body */}
            <div className=" py-10">
                <Estates />
                <div className="max-w-[1600px] mx-auto px-8 my-20">

                    <h1 className="text-center text-2xl md:text-3xl lg:text-5xl">Why our services are the top choice</h1>
                    <p className="text-center text-base my-5">We provide our best with our employees , designer and workers . We make our properties so unique and comfortable , you can see our reviews .
                    </p>

                    <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
                        <div className="flex gap-3 shadow-lg border-b-2 rounded-lg p-5">
                            <h2 className="text-4xl font-bold">01</h2>
                            <div>
                                <h2 className="text-2xl mb-3 font-semibold">Fast Support</h2>
                                <p>At Crestiq Vibe, we believe in providing swift and reliable support to our valued clients, ensuring that every step of your journey with us is seamless and stress-free. Our dedicated team is committed to delivering prompt assistance, addressing your needs with efficiency and expertise.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 shadow-lg border-b-2 rounded-lg p-5">
                            <h2 className="text-4xl font-bold">02</h2>
                            <div>
                                <h2 className="text-2xl mb-3 font-semibold">Creative Design</h2>
                                <p>
                                    But we're not just about support; we're also about style. Our creative design ethos ensures that each property showcased on Crestiq Vibe is presented in its best light, capturing the essence of luxury and elegance. From sleek hotel layouts to charming resort landscapes, our designs are tailored to inspire and captivate.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 shadow-lg border-b-2 rounded-lg p-5">
                            <h2 className="text-4xl font-bold">03</h2>
                            <div>
                                <h2 className="text-2xl mb-3 font-semibold">Affordable</h2>
                                <p>
                                    And the best part? We believe that luxury shouldn't come with a hefty price tag. At Crestiq Vibe, we're committed to offering affordable prices without compromising on quality or service. Whether you're a first-time buyer or an experienced investor, we strive to make your dream property a reality without breaking the bank.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;