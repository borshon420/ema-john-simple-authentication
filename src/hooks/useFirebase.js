import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const signInUsingGoogle = () => {
        
    signInWithPopup(auth, GoogleProvider)
    .then(result => {
        setUser(result.user)
    })
    .catch(error => {
        setError(error.message)
    })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    // observe whether user change or not
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])
    return {
        user,
        error,
        logOut,
        signInUsingGoogle
    }
    
}

export default useFirebase;