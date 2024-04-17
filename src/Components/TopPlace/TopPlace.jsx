
const TopPlace = () => {
    return (
        <div className="my-20 max-w-[1600px] mx-auto ">
            <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold" data-aos="fade-up">Our Next Locations </h1>
            <p className="text-base text-center mt-2 mb-10" data-aos="fade-up">Discover diverse escapes with Crestiq Vibe. Find your perfect retreat today.</p>
            <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-4 md:px-8">
                <div className="relative max-h-[300px]" data-aos="fade-in">
                    <img src="https://i.ibb.co/nbCZ52X/empire-state-building-night-23-2151003509.jpg"
                        className=" w-full h-full" alt="USA" />
                    <p className=" absolute top-[0] right-[0] text-white font-bold text-4xl bg-[#24222296]  w-full h-full items-center justify-center flex ">USA</p>
                </div>
                <div className="relative max-h-[300px]" data-aos="fade-in">
                    <img src="https://i.ibb.co/KLmsd2b/aerial-view-tokyo-cityscape-with-fuji-mountain-japan.jpg"
                        className=" w-full h-full" alt="Japan" />
                    <p className=" absolute top-[0] right-[0] text-white font-bold text-4xl bg-[#24222296]  w-full h-full items-center justify-center flex ">Japan</p>
                </div>
                <div className="relative max-h-[300px]" data-aos="fade-in">
                    <img src="https://i.ibb.co/9t32cds/aerial-view-suzhou-overpass-1359-523.jpg"
                        className=" w-full h-full " alt="Bangladesh" />
                    <p className=" absolute top-[0] right-[0] text-white font-bold text-4xl bg-[#24222296]  w-full h-full items-center justify-center flex ">Bangladesh</p>
                </div>
                <div className="relative max-h-[300px]" data-aos="fade-in">
                    <img src="https://i.ibb.co/X88hDTL/beautiful-overwater-bungalows-ocean-maldives-island-181624-42867.jpg" className="  w-full h-full " alt="Maldives" />
                    <p className=" absolute top-[0] right-[0] text-white font-bold text-4xl bg-[#24222296]  w-full h-full items-center justify-center flex ">Maldives</p>
                </div>
                <div className="relative max-h-[300px]" data-aos="fade-in">
                    <img src="https://i.ibb.co/Hq7h12r/gyeongbokgung-palace-with-cherry-blossom-spring-korea-335224-266.jpg" className="h-full w-full " alt="Korea" />
                    <p className=" absolute top-[0] right-[0] text-white font-bold text-4xl bg-[#24222296]  w-full h-full items-center justify-center flex ">Korea</p>
                </div>
                <div className="relative max-h-[300px]" data-aos="fade-in">
                    <img src="https://i.ibb.co/sPLFrKs/aerial-shot-beautiful-city-riga-latvia-winter-181624-28696.jpg" className=" w-full h-full" alt="Finland" />
                    <p className=" absolute top-[0] right-[0] text-white font-bold text-4xl bg-[#24222296]  w-full h-full items-center justify-center flex ">Finland</p>
                </div>
            </div>
        </div>
    );
};

export default TopPlace;