import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})


    // google login 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // user Create 
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login 
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user LogOut 
    const LogOut = () => {
        return signOut(auth)
    }

    // user update
    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }



    // user authentication 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser)


        });
        return () => {
            unSubscribe()
        }
    }, [])

    console.log(user);


    const userInfo = {
        user,
        signUp,
        Login,
        LogOut,
        googleLogin,
        userUpdate
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