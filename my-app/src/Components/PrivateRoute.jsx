import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true"; // Example using localStorage
};

export default function PrivateRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" />;
  }
  return children;
}
