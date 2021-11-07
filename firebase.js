// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwAV0HeFvtAxfCiQWTliSXDLHMtrbZ8Q0",
  authDomain: "uber-next-clone-b07d0.firebaseapp.com",
  projectId: "uber-next-clone-b07d0",
  storageBucket: "uber-next-clone-b07d0.appspot.com",
  messagingSenderId: "596717619968",
  appId: "1:596717619968:web:2a3d0259b9aaeda56441e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
const auth=getAuth()

export {app,provider,auth}