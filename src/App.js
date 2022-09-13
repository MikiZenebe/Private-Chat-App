import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import AuthProvider from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <PrivateRoute exact path="/" element={<Home />} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
