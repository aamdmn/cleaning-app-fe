import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
