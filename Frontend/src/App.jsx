


import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import WorkTheory from "./components/Work";
import Dashboard from "./components/Dashboard";
import TechnologiesPage from "./components/TechnologiesPage";

function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Custom wrapper to control header visibility
function LayoutWrapper({ children }) {
  const location = useLocation();

  // Hide header on these paths
  const noHeaderPaths = ["/dashboard", "/technologies"];

  const showHeader = !noHeaderPaths.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
    </>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-theory" element={<WorkTheory />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}
