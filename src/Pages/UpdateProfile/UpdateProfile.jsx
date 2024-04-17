import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { Bounce, toast } from "react-toastify";

const UpdateProfile = () => {
    const { user, isLoading } = useContext(AuthContext)
    console.log(user);
    const { displayName, email, photoURL } = user
    const handleUpdate = e => {
        const email = e.target.email.value;
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log(email, name, image);
         
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
            .then(() => {
                console.log(auth.currentUser)
                toast.success('Update successful', {
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
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="max-w-[1600px] flex flex-col  mx-auto py-20">
            <Helmet><title>Crestiq Vibe || Update Profile</title></Helmet>
            {
            isLoading&& <div className="flex justify-center items-center"><span className="w-20 loading loading-spinner text-error"></span></div>
            }
            <div className="flex flex-col  items-center h-full">
                <h1 className="text-4xl font-bold mb-20" data-aos="fade-left">Update your profile</h1>
                <div className="avatar" data-aos="fade-in">
                    <div className="w-36 rounded-full">
                        <img src={photoURL} className="border-[5px] rounded-full "/>
                    </div>
                </div>
                <form className="form-control max-w-xl w-full " onSubmit={handleUpdate} data-aos="fade-in">

                    <label className="text-xl">Name</label>
                    <input name="name" type="text" defaultValue={displayName} className="px-3 py-2 mb-3" required/>
                    <label className="text-xl">Email</label>
                    <input type="email" value={email} name="email" className="px-3 py-2 mb-3" />
                    <label className="text-xl" >Photo URL</label>
                    <input type="text" defaultValue={photoURL} name="image" className="px-3 py-2 mb-3" required/>
                    <input type="submit" value="Update" className="btn mt-3" />
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;