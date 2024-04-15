
const Team = () => {
    return (
        
        <div className="max-w-[1600px] mx-auto mb-20 bg-[#1e1e1e]">
            <h3 className="text-center text-2xl my-5">PROFECTIONAL TEAM</h3>
            <h1 className="text-center text-4xl mb-8">Meet Our Leadership Team</h1>
            <div className="grid xl:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-5 p-5">
                <div className="bg-[#16161692] p-1 ">
                    <img src="https://i.ibb.co/ZS5CX5H/team01.jpg" alt="member" className="w-full"/>
                    <h3 className="mx-8 my-1 text-2xl font-bold">Howard Holmes</h3>
                    <p className="mx-8 mb-6 text-lg">Manager</p>
                </div>
                <div className="bg-[#16161692] p-1 ">
                    <img src="https://i.ibb.co/3N4vC6R/team02.jpg" alt="member" className="w-full" />
                    <h3 className="mx-8 my-1 text-2xl font-bold">Howard Holmes</h3>
                    <p className="mx-8 mb-6 text-lg">Builder</p>
                </div>
                <div className="bg-[#16161692] p-1 ">
                    <img src="https://i.ibb.co/wMztRdq/team03.jpg" alt="member" className="w-full"/>
                    <h3 className="mx-8 my-1 text-2xl font-bold">Howard Holmes</h3>
                    <p className="mx-8 mb-6 text-lg">Senior Designer</p>
                </div>
                <div className="bg-[#16161692] p-1 ">
                    <img src="https://i.ibb.co/Gt3whQK/team04.jpg" alt="member" className="w-full" />
                    <h3 className="mx-8 my-1 text-2xl font-bold">Howard Holmes</h3>
                    <p className="mx-8 mb-6 text-lg">Designer</p>
                </div>
            </div>
        </div>
    );
};

export default Team;