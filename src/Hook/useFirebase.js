import { useEffect, useState } from "react"
import firebaseAthuentication from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";




firebaseAthuentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth()

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    const Register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log('clicked');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        console.log(email, password);
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])
    return {
        signInUsingGoogle, user, error, logout, isLoading, Register
    }
}

export default useFirebase;



