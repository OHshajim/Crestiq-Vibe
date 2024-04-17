import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const Links = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " border bg-[#7b7b7b71]" : ""
            }>
            home
        </NavLink></li>

        <li><NavLink
            to='/update'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " border " : ""
            }>
            Update Profile</NavLink></li>

        <li><NavLink
            to='/aboutus'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " border " : ""
            }>About Us</NavLink></li>
    </>
    const logout = () => {
        LogOut()
        toast.success(' successfully logged out', {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
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
         <div className={fix ? "fixed z-10 w-full  bg-[#0f0e0e] duration-500" : "fixed z-10 w-full duration-200"}data-aos="fade-down">
                <div className="navbar  text-white max-w-[1600px] w-full mx-auto px-2 md:px-8">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {Links}
                            </ul>
                        </div>
                        <a className="  text-xl">Crestiq Vibe</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {Links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={user.displayName}>
                                        <div className="w-12 rounded-full ">
                                            <img alt="User" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <button className="btn ml-3" onClick={logout}>Log out</button>
                                </>
                                : <Link className="btn ml-3" to='/login' >Log in</Link>
                        }

                    </div>
                </div >
          </div >
    );
};

export default Navbar;