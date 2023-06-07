import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import Anonymous from "./Services/Anonymous";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Anonymous />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
