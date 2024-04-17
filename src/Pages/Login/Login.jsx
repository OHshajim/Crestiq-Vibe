import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {

    const [isShow, setShow] = useState(false)
    const { login, GLogin } = useContext(AuthContext)
    const [ error, setError ] = useState(' ')
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        setError("")
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
        // log in 
        login(email, password)
            .then(result => {
                toast.success(' successfully logged in', {
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
                console.log(result.user);
                navigate("/")
            })
            .catch(error => {
                console.log(error.code)
                toast.error('Error !!! please log in again', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });

                setError(error.code)
            })
    }
    const handleGoogle = () => {
        GLogin(googleProvider)
            .then(result => {
                toast.success(' successfully logged in', {
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
                console.log(result.user);

                navigate('/')

            })
            .catch(error => {
                console.error(error)
                toast.error('Error !!! please log in again', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });

                setError(error)
            })
    }
    const handleGithub = () => {
        GLogin(githubProvider)
            .then(result => {
                toast.success(' successfully logged in', {
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
                console.log(result.user);

            })
            .catch(error => {
                console.error(error)
                toast.error('Error !!! please log in again', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });

                setError(error)
            })
    }
    return (
        <div>
            <Helmet><title>Crestiq Vibe || Login</title></Helmet>
            <div className="flex flex-col justify-center items-center  py-20">
                <form className=" max-w-[700px] w-full bg-[#050a15] py-16 px-10 rounded-lg" onSubmit={handleLogin}>
                    <h3 className="text-3xl font-bold ">Welcome Back </h3>
                    <p className="mt-2 font-bold ">LogIn Now</p>

                    <label className="input input-bordered flex items-center gap-2 bg-black my-5">
                        <AiFillMail />
                        <input type="email" className="grow" placeholder="Email" name="email" required />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 bg-black">
                        <RiLockPasswordFill />
                        <input type={isShow ? "text" : "password"} className="grow" placeholder="password" name="password" required />
                        <span onClick={() => setShow(!isShow)} className="text-sm sm:text-xl " >

                            {
                                isShow ?
                                    <FaRegEye /> :
                                    <FaRegEyeSlash />
                            }
                        </span>

                    </label>
                            {
                                error&& <p className="my-3 text-bold text-red-600">{error}</p>
                            }
                    <input type="submit" value="Submit" className="w-full btn hover:bg-black mt-5" />
                    <p className="mt-3">Do not have an Account yet ? <Link to="/register" className="font-semibold btn-link link-hover" >Register </Link>Now</p>

                    <p className="text-sm font-bold text-[#585757] text-center mt-3">& <br /> Log in With </p>

                    <div className=" flex justify-center gap-5 pt-3">
                        <button onClick={handleGoogle} className="btn btn-circle text-3xl text-center"><FcGoogle /></button>
                        <button onClick={handleGithub} className="btn btn-circle text-3xl text-center"> <BsGithub /></button>
                    </div>
                </form>
            </div>

        </div >
    );
};

export default Login;