import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
