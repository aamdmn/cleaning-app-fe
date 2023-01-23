import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./features/app/login/Login";
import Navbar from "./features/app/navbar/Navbar";
import Orders from "./features/app/Orders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<Navbar />}>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Orders />} />
      </Route>
    </Routes>
  )
}

export default App;
