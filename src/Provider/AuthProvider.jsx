import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import PropTypes from 'prop-types'; // ES6


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    // Sign Up
    const register = (email, password) => {
        // setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    useEffect(() => {
        const currentUser = onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
        return () => currentUser()
    }, [])


    const authInfo = { user, login, register }
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