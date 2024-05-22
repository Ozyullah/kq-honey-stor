import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import toast from 'react-hot-toast';



export const WebContext =createContext();


const auth =getAuth(app)
const AuthContext = ({ children }) => {

    const [user, setUser]=useState();
    const [loader,setLoader]=useState(null);


    const createUser =(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const addedUpdateUser =(displayName,photoURL)=>{
        setLoader(true)
        return updateProfile(auth.currentUser, {displayName,photoURL})
    }

    const logInWithEmailandPassword =(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const loginWithGoogle =(provider)=>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }


    const logOut =()=>{
        return signOut(auth)
    }



    useEffect(()=>{
       const unSubmite= onAuthStateChanged(auth,(users)=>{

            if(users){
                setUser(users);
                console.log(users)
            }else{
                toast.error("user is signOut")
            }
            
            setLoader(false)
        })
        return unSubmite;
    },[])

    const maintaineValue ={
        user,
        createUser,
        addedUpdateUser,
        logInWithEmailandPassword,
        loginWithGoogle,
        logOut

    }

    return (
        <WebContext.Provider value={maintaineValue}>
            { children }
        </WebContext.Provider>
    );
};

export default AuthContext;