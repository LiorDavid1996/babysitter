
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCOuv2JHRLXyuF9pExEEdIyPiDfPkj7gaQ",
  authDomain: "react-baby-ec694.firebaseapp.com",
  projectId: "react-baby-ec694",
  storageBucket: "react-baby-ec694.appspot.com",
  messagingSenderId: "971725860626",
  appId: "1:971725860626:web:f52ae6eb119006e92e4dcb",
  measurementId: "G-0F6Q1F29CS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;


