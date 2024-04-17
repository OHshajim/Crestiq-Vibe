import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { Helmet } from "react-helmet-async";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";
const Register = () => {
    const [isShow, setShow] = useState(false)
    const [see, setSee] = useState(false)
    const { register } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const image = e.target.image.value;
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
            .then(result => {
                console.log(result.user, auth.currentUser)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                }).then(() => {
                    console.log(auth.currentUser)
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
                    navigate('/')
                }).catch((error) => {
                    console.log(error)
                });

            })
            .catch(error => {
                console.log(error)
                toast.error(`${error.code}`, {
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
            })
    }

    return (
        <div>
            <Helmet><title>Crestiq Vibe || Register</title></Helmet>

            <div>

                <div className=" w-screen px-5 py-20" data-aos="fade-left">
                    <form className=" max-w-[700px] mx-auto w-full bg-[#050a15] py-16 px-4  sm:px-10 rounded-lg" onSubmit={handleRegister}>
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
                            <input type={see ? "text" : "password"} className="grow" placeholder="password" name="password" required />
                            <span onClick={() => setSee(!see)} className="text-sm sm:text-xl " >
                                {
                                    see ?
                                        <FaRegEye /> :
                                        <FaRegEyeSlash />
                                }
                            </span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-black mt-5">
                            <RiLockPasswordFill />
                            <input type={isShow ? "text" : "password"} className="grow" placeholder="Confirm Password" name="confirmPassword" required />
                            <span onClick={() => setShow(!isShow)} className="text-sm sm:text-xl " >
                                {
                                    isShow ?
                                        <FaRegEye /> :
                                        <FaRegEyeSlash />
                                }
                            </span>
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