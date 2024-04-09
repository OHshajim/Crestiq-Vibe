
const Footer = () => {
    return (
        <div>
        <div className="bg-[#141313] flex flex-col justify-between items-center">
            <div className="max-w-[1600px] w-full">
                <footer className="footer p-10 text-base-content ">
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>

                    <nav>
                        <h6 className="footer-title text-2xl">Our Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
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
                                <button className="btn btn-accent join-item text-3xl  border-none">icon</button>
                            </div>
                        </fieldset>
                    </form>

                </footer>
            </div>
            </div>
            <footer className="footer footer-center p-4 bg-black text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div >
    );
};

export default Footer;