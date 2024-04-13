import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Components/Nav/Navbar";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const UpdateProfile = () => {
    const { user, isLoading } = useContext(AuthContext)
    console.log(user);
    const { displayName, email, photoURL } = user
    const handleUpdate = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log(email, name, image);

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
            .then(() => {
                console.log(auth.currentUser)
            })
            .catch((error) => {
                console.log(error)
            });
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
                <form className="form-control max-w-xl w-full " onSubmit={handleUpdate}>

                    <label className="">Name</label>
                    <input name="name" type="text" defaultValue={displayName} className="px-3 py-2 " required/>
                    <label >Email</label>
                    <input type="email" value={email} name="email" className="px-3 py-2 " />
                    <label >Photo URL</label>
                    <input type="text" defaultValue={photoURL} name="image" className="px-3 py-2 " required/>
                    <input type="submit" value="Update" className="btn " />
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;