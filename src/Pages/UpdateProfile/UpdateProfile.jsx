import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Components/Nav/Navbar";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    const { displayName, email, photoURL } = user
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

    }
    return (
        <div className="max-w-[1600px] flex flex-col  mx-auto h-[90vh]">
            <Navbar />
            <div>
                <h1 className="text-3xl font-bold ">Update your profile</h1>
            </div>
            <div className="flex flex-col  items-center ">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={photoURL} />
                    </div>
                </div>
                <form className="form-control max-w-xl w-full " onSubmit={handleSubmit(onSubmit)}>

                    <label className="">Name</label>
                    <input type="text" value={displayName} className="px-3 py-2 " name="displayNa"/>
                    <label >Email</label>
                    <input type="email" value={email} className="px-3 py-2 " />
                    <label >Photo URL</label>
                    <input type="text" value={photoURL} className="px-3 py-2 " />

                    <input type="submit" value="Update" className="btn " />
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;