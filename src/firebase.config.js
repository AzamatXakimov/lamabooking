import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyC1DYu6bAai1-GVj4vVMWrvXHmETl8nnIc",
    authDomain: "labmabooking.firebaseapp.com",
    projectId: "labmabooking",
    storageBucket: "labmabooking.appspot.com",
    messagingSenderId: "737239155780",
    appId: "1:737239155780:web:61ed1d9fc159c364506811",
    measurementId: "G-VGT5R2VTXE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);