// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_M2eT4dg4JgkPK3S55RXOvQjhDRAPyew",
  authDomain: "fsa-org.firebaseapp.com",
  projectId: "fsa-org",
  storageBucket: "fsa-org.appspot.com",
  messagingSenderId: "246176672217",
  appId: "1:246176672217:web:274088a6c648fb548b91c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
export const auth = getAuth(app);
export default app;
