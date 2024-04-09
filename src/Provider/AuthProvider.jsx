import { createContext, useState } from 'react';
const AuthContext = createContext(AuthProvider)
const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null)
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;