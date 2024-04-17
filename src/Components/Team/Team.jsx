
const Team = () => {
    return (

        <div className="mb-20 px-4 md:px-8 ">
            <div className="flex items-center gap-4  justify-center" data-aos="fade-up">
                <div className="border w-14 md:w-28"></div>
                <h3 className=" text-lg md:text-2xl my-5">PROFECTIONAL TEAM</h3>
            </div>
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8" data-aos="fade-up">Meet Our Leadership Team</h1>
            <div className="grid xl:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-5 ">
                <div className="bg-[#16161692] p-1 " data-aos="fade-up">
                    <img src="https://i.ibb.co/ZS5CX5H/team01.jpg" alt="member" className="w-full" />
                    <h3 className="mx-8 my-1 text-xl md:text-2xl font-bold">Howard Holmes</h3>
                    <p className="mx-8 mb-6 text-lg">Manager</p>
                </div>
                <div className="bg-[#16161692] p-1 " data-aos="fade-up">
                    <img src="https://i.ibb.co/3N4vC6R/team02.jpg" alt="member" className="w-full" />
                    <h3 className="mx-8 my-1 text-xl md:text-2xl font-bold">Howard Holmes</h3>
                    <p className="mx-8 mb-6 text-lg">Builder</p>
                </div>
                <div className="bg-[#16161692] p-1 " data-aos="fade-up">
                    <img src="https://i.ibb.co/wMztRdq/team03.jpg" alt="member" className="w-full" />
                    <h3 className="mx-8 my-1 text-xl md:text-2xl font-bold">Howard Holmes</h3>
                    <p className="mx-8 mb-6 text-lg">Senior Designer</p>
                </div>
                <div className="bg-[#16161692] p-1 " data-aos="fade-up">
                    <img src="https://i.ibb.co/Gt3whQK/team04.jpg" alt="member" className="w-full" />
                    <h3 className="mx-8 my-1 text-xl md:text-2xl font-bold">Howard Holmes</h3>
                    <p className="mx-8 mb-6 text-lg">Designer</p>
                </div>
            </div>
        </div>
    );
};

export default Team;