import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD-fWMbj9Z3g8UknwldfXnVGekxYfi0NcM",
  authDomain: "fir-75c88.firebaseapp.com",
  projectId: "fir-75c88",
  storageBucket: "fir-75c88.appspot.com",
  messagingSenderId: "986427194898",
  appId: "1:986427194898:web:1d032a4a5137e8933262cb",
  measurementId: "G-W8R3B6YXWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};