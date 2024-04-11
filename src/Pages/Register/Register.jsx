import { Link } from "react-router-dom";
import Navbar from "../../Components/Nav/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
const Register = () => {
    const { register } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        setError("")

        if (password !== confirmPassword) {
            setError("Passwords do not match. Please try again")
            return;
        }

        else if (password.length < 6) {
            setError("Password must be at least 6 characters long.")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("Password must include at least 1 capital letter.")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setError("Password must include at least 1 lowercase  letter.")
            return;
        }
        console.log(email, password, confirmPassword);
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
                        <label className="input input-bordered flex items-center gap-2 bg-black my-5">
                            <AiOutlineUser />
                            <input type="text" className="grow" placeholder="User Image URL" name="image" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-black">
                            <RiLockPasswordLine />
                            <input type="password" className="grow" placeholder="password" name="password" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-black mt-5">
                            <RiLockPasswordFill />
                            <input type="password" className="grow" placeholder="Confirm Password" name="confirmPassword" required />
                        </label>
                        {
                            error && <p className="text-red-700 font-bold mt-3">{error}</p>
                        }
                        <input type="submit" value="Submit" className="w-full btn hover:bg-black mt-4" />
                        <p className="mt-2">Already have an Account ? <Link to="/login" className=" btn-link link-hover" >Log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;