import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Unauthorised from "./pages/Unauthorised";
import PrivateRoute from "./components/PrivateRoute";
import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Box m={4}>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
