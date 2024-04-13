import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Components/Nav/Navbar";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user, isLoading } = useContext(AuthContext)
    console.log(user);
    const { displayName, email, photoURL } = user
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

    }
    return (
        <div className="max-w-[1600px] flex flex-col  mx-auto h-[90vh]">
            <Helmet><title>Crestiq Vibe || Update Profile</title></Helmet>
            <Navbar />
            {
                isLoading && <div className="flex justify-center items-center my-20"><span className="w-20 loading loading-spinner text-error"></span></div>
            }
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
                    <input {...register("name")} name="name" type="text" defaultValue={displayName} className="px-3 py-2 " />
                    <label >Email</label>
                    <input type="email" defaultValue={email} className="px-3 py-2 " />
                    <label >Photo URL</label>
                    <input type="text" defaultValue={photoURL} className="px-3 py-2 " />
                    <input type="submit" value="Update" className="btn " />
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;