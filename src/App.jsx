import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./components/Products";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/about" element={<About setAuth={setIsAuthenticated} />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/products" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
          <Products />
        </ProtectedRoute>
        }
        />

      </Routes>
    </Router>
  );
}

export default App;
