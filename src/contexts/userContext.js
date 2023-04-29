import { createContext, useEffect, useState } from "react";
// import app from "../firebase.init";
// import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  //   const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  //   // sign in with popup
  const createUserWithPopup = async () => {
    console.log("loggin in");
    return await signInWithPopup(auth, provider);
  };
  const logOut = () => {
    alert("You're logged out");
    return signOut(auth);
    // setLoading(true);
    // setUser(null);
  };
  // const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("inside useEffect", currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  const authInfo = { user, createUserWithPopup, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
