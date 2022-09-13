import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute ({components: Component, ...rest}) => {
    const {user} = useContext(AuthContext)
  return (
    <div>PrivateRoute</div>
  );
}

export default PrivateRoute;
