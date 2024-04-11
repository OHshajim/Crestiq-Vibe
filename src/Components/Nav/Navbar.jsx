import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/update'>Update Profile</NavLink></li>
    </>
    const logout = () => {
        LogOut()
    }
    return (
        <div className="navbar bg-transparent  z-10 text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className="  text-xl">daisyUI</a>
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
                        :<Link className="btn ml-3" to='/login' >Log in</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;