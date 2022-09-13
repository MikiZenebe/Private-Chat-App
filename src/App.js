import React from "react";
import { Route, Routes } from "react-router-dom";

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
      <Navbar />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" exact />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
