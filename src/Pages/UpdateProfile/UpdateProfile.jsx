import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const { displayName, email, photoURL } = user
    return (
        <div>
            <img src={photoURL} alt="" />
            <h3>{displayName}</h3>
            <h3>{email}</h3>
        </div>
    );
};

export default UpdateProfile;