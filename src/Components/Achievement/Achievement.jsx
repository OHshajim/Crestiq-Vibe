
const Achievement = () => {
    return (
        <div className="flex flex-1 flex-col lg:flex-row  max-w-[1600px] mx-auto p-8 gap-10">
            <div>
                <img src="https://i.ibb.co/VqhPKBx/img1.jpg" alt="building" className="w-full" />
            </div>
            <div className="flex flex-1 flex-col my-8 lg:my-20 space-y-8">
                <div className="flex items-center gap-4">
                    <h3 className="text-2xl ">Fun Fact</h3>
                    <div className="border w-28"></div>
                </div>
                <h1 className="text-5xl ">Our Achievements</h1>
                <p></p>
                <div className="stats stats-vertical lg:stats-horizontal bg-transparent ">

                    <div className="stat">
                        <div className="stat-title">Total Projects</div>
                        <div className="stat-value">508</div>
                        <div className="stat-desc">Jan 1st 2022 - Apr 1st 2024</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Our Clients</div>
                        <div className="stat-value">308</div>
                        <div className="stat-desc">↗︎ 243 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Awards</div>
                        <div className="stat-value">22</div>
                        <div className="stat-desc">Jan 1st 2022 - Apr 1st 2024</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Achievement;