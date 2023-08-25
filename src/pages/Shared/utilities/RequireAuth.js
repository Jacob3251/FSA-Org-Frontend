import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/userContext";
import Loader from "../Loader/Loader";

const RequireAuth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
