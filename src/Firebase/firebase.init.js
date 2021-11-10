import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



const firebaseAthuentication = () => {
    initializeApp(firebaseConfig);
}


export default firebaseAthuentication;