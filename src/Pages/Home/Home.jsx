import { Helmet } from "react-helmet-async";
import Header from "../../Components/Banner/Banner";
import Estates from "../../Components/Estates/Estates";
import TopPlace from "../../Components/TopPlace/TopPlace";

const Home = () => {
    return (
        <div>
            <Helmet><title>Crestiq Vibe || Home</title></Helmet>

            <Header />

            {/* body */}
            <div className=" py-10">
                <Estates />
                <TopPlace />

                {/* service to chose us  */}
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 my-20">

                    <h1 className="text-center text-2xl md:text-3xl lg:text-5xl" data-aos="fade-up">Why our services are the top choice</h1>
                    <p className="text-center text-base my-5" data-aso="fade-up">We provide our best with our employees , designer and workers . We make our properties so unique and comfortable , you can see our reviews .
                    </p>

                    <div className="flex flex-col md:flex-row justify-between gap-10 py-10" >
                        <div className="flex gap-3 shadow-lg border-b-[3px] border-blue-500 rounded-lg p-5" data-aos="fade-up">
                            <h2 className="text-2xl md:text-4xl font-bold">01</h2>
                            <div>
                                <h2 className="text-2xl mb-3 font-semibold">Fast Support</h2>
                                <p>At Crestiq Vibe, we believe in providing swift and reliable support to our valued clients, ensuring that every step of your journey with us is seamless and stress-free. Our dedicated team is committed to delivering prompt assistance, addressing your needs with efficiency and expertise.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 shadow-lg border-b-[3px] border-blue-500 rounded-lg p-5" data-aos="fade-up">
                            <h2 className="text-2xl md:text-4xl font-bold">02</h2>
                            <div>
                                <h2 className="text-2xl mb-3 font-semibold">Creative Design</h2>
                                <p>
                                    But we're not just about support; we're also about style. Our creative design ethos ensures that each property showcased on Crestiq Vibe is presented in its best light, capturing the essence of luxury and elegance. From sleek hotel layouts to charming resort landscapes, our designs are tailored to inspire and captivate.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 shadow-lg border-b-[3px] border-blue-500 rounded-lg p-5" data-aos="fade-up">
                            <h2 className="text-2xl md:text-4xl font-bold">03</h2>
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