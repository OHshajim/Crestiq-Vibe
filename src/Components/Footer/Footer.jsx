import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#141313] " data-aos="fade-up">
                <div className="max-w-[1600px]  mx-auto">
                    <footer className="flex flex-col lg:flex-row  justify-between items-start lg:items-center footer py-10
                 px-4 md:px-8 text-base-content">
                        <div>
                            <h1 className="text-3xl font-bold">Crestiq  <span className="text-blue-500">Vibe</span> </h1>
                            <p className="text-base " >Providing reliable tech since 2018</p>
                        </div>

                        <nav>
                            <h6 className="footer-title text-2xl">Our Services</h6>
                            <p className="link link-hover">Branding</p>
                            <p className="link link-hover">Best Design</p>
                            <p className="link link-hover">Best Price</p>
                            <p className="link link-hover"></p>
                        </nav>
                        <nav>
                            <h6 className="footer-title text-2xl">Legal</h6>
                            <p className="link link-hover">Terms of use</p>
                            <p className="link link-hover">Privacy policy</p>
                            <p className="link link-hover">Cookie policy</p>
                        </nav>
                        <form>
                            <h6 className="footer-title text-2xl">Our Newsletter</h6>
                            <fieldset className="form-control ">
                                <label className="label">
                                    <span className="label-text">Enter your email address</span>
                                </label>
                                <div className="join">
                                    <input type="text" placeholder="email" className="input input-bordered join-item border-none" />
                                    <button className="btn  join-item text-xl  border-none"><AiOutlineArrowRight /></button>
                                </div>
                            </fieldset>
                        </form>

                    </footer>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-black text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Crestiq   <span className="text-blue-500">Vibe</span> Industries Ltd</p>
                </aside>
            </footer>
        </div >
    );
};

export default Footer;