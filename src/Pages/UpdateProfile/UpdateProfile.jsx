import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Components/Nav/Navbar";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const { displayName, email, photoURL } = user
    return (
        <div className="max-w-[1600px] flex flex-col  mx-auto h-[90vh]">
            <Navbar />
           <div className="flex mt-20 border">
            <div className="flex flex-col  items-center flex-1 border">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={photoURL} />
                    </div>
                </div>
                <form className="form-control max-w-xl w-full">

                    <label className="">Name</label>
                    <input type="text" value={displayName} className="px-3 py-2 " />
                    <label >Email</label>
                    <input type="email" value={email} className="px-3 py-2 " />
                </form>
            </div>
            <div>
            <h1 className="text-3xl font-bold flex-1">Update your profile</h1>
            </div>
           </div>
        </div>
    );
};

export default UpdateProfile;