import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // ---> facebook login
    const faceBookLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // --->create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ---> login with email
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ---> manage user 
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, [])


    // ---> logout
    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        user,
        faceBookLogin,
        createUser,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;