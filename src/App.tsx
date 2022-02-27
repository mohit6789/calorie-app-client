import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unauthorised from "./pages/Unauthorised";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/unauthorised" element={<Unauthorised />} />
      </Routes>
    </div>
  );
}

export default App;
