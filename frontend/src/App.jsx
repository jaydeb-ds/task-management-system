import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate()
  return (
    <>
      <p
        onClick={() => navigate("/login")}>
        login
      </p>
      <p
        onClick={() => navigate("/signup")}>
        signup
      </p>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
}

export default App;
