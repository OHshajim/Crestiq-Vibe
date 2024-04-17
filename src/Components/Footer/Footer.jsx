import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
        <div className="bg-[#141313] " data-aos="fade-up">
            <div className="max-w-[1600px]  mx-auto">
                <footer className="flex flex-col lg:flex-row  justify-between items-start lg:items-center footer py-10 px-10 md:px-4 text-base-content">
                    <p className="text-3xl">Crestiq Vibe <br /><span className="text-base " >Providing reliable tech since 2018</span></p>

                    <nav>
                        <h6 className="footer-title text-2xl">Our Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Best Design</a>
                        <a className="link link-hover">Best Price</a>
                        <a className="link link-hover"></a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-2xl">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title text-2xl">Our Newsletter</h6>
                        <fieldset className="form-control ">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item border-none" />
                                <button className="btn btn-accent join-item text-xl  border-none"><AiOutlineArrowRight /></button>
                            </div>
                        </fieldset>
                    </form>

                </footer>
            </div>
            </div>
            <footer className="footer footer-center p-4 bg-black text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Crestiq Vibe Industries Ltd</p>
                </aside>
            </footer>
        </div >
    );
};

export default Footer;