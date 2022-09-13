import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import AuthProvider from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
