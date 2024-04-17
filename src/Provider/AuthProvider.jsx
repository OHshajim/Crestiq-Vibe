import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import PropTypes from 'prop-types'; // ES6


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    // Sign Up
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }
    // Google or github Login
    const GLogin = (Provider) => {
        setLoading(true)
        return signInWithPopup(auth, Provider);
    }

    // log out
    const LogOut = () => {
        setLoading(true)
        signOut(auth);
    }

    useEffect(() => {
        const currentUser = onAuthStateChanged(auth, (user) => {
            // toast('Here is your toast.');
            setUser(user);
            setLoading(false);
        });
        return () => currentUser()
    }, [])


    const authInfo = { user, login, register, GLogin, LogOut, isLoading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;