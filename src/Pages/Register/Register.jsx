import { Link } from "react-router-dom";
import Navbar from "../../Components/Nav/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
const Register = () => {
    const { register } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // log in 
        register(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <Navbar />

                <div className="flex flex-col justify-center items-center w-screen h-[80vh]">
                    <form className=" max-w-[700px] w-full bg-[#050a15] py-16 px-10 rounded-lg" onSubmit={handleRegister}>
                        <h3 className="text-3xl font-bold">Register Now</h3>

                        <label className="input input-bordered flex items-center gap-2 bg-black my-5">
                            <AiOutlineMail />
                            <input type="email" className="grow" placeholder="Email" name="email" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-black my-5">
                            <AiOutlineUser />
                            <input type="text" className="grow" placeholder="User Name" name="name" required />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 bg-black">
                            <RiLockPasswordLine />
                            <input type="password" className="grow" placeholder="password" name="password" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-black mt-5">
                            <RiLockPasswordFill />
                            <input type="password" className="grow" placeholder="Confirm Password" name="confirmPassword" required />
                        </label>
                        <input type="submit" value="Submit" className="w-full btn hover:bg-black mt-5" />
                        <p className="mt-2">Already have an Account ? <Link to="/login" className=" btn-link link-hover" >Log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;