import { Link } from "react-router-dom";
import Navbar from "../../Components/Nav/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Login = () => {


    const { login, GLogin } = useContext(AuthContext)
    
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // log in 
        login(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))


    }
    const handleGoogle = () => {
        GLogin(googleProvider)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
    }
    const handleGithub = () => {
        GLogin(githubProvider)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar />

            <div className="flex flex-col justify-center items-center w-screen h-[80vh]">
                <form className=" max-w-[700px] w-full bg-[#050a15] py-16 px-10 rounded-lg" onSubmit={handleLogin}>
                    <h3 className="text-3xl font-bold">Welcome Back </h3>

                    <label className="input input-bordered flex items-center gap-2 bg-black my-5">
                        <AiFillMail />
                        <input type="email" className="grow" placeholder="Email" name="email" required />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 bg-black">
                        <RiLockPasswordFill />
                        <input type="password" className="grow" placeholder="password" name="password" required />
                    </label>
                    <input type="submit" value="Submit" className="w-full btn hover:bg-black mt-5" />
                    <p className="mt-3">Do not have an Account yet ? <Link to="/register" className="font-semibold btn-link link-hover" >Register </Link>Now</p>

                    <p className="text-sm font-bold text-[#585757] text-center mt-3">& <br /> Log in With </p>

                    <div className=" flex justify-center gap-5 pt-3">
                        <button onClick={handleGoogle} className="btn btn-circle text-3xl text-center"><FcGoogle /></button>
                        <button onClick={handleGithub} className="btn btn-circle text-3xl text-center"> <BsGithub /></button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;