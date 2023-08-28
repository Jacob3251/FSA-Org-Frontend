import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const auth = getAuth(app);
const UserContext = ({ children }) => {
  //   const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [parentPost, setParentPost] = useState("");
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("inside useEffect", currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);
  const signInWithGooglePopUp = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log("hola");
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        setError("");
        setLoading(false);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        setLoading(false);
        // ...
      });
  };
  const logOut = () => {
    alert("You're logged out");
    return signOut(auth);
    // setLoading(true);
    // setUser(null);
  };
  // const auth = getAuth();

  const authInfo = {
    user,
    signInWithGooglePopUp,
    logOut,
    loading,
    parentPost,
    setParentPost,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
