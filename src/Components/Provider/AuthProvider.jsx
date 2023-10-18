import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    // user Create 
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login 
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        signUp,
        Login
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;