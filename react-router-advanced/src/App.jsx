import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import ProfileDetails from "./components/Profile/ProfileDetails";
import ProfileSettings from "./components/Profile/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuthenticated = false; // Simulate login status (change to true for testing)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Profile Route */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="profile" element={<Profile />}>
            {/* Nested Routes */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>

        {/*  Dynamic Route for Blog Post */}
        <Route path="blog/:postId" element={<BlogPost />} />

        {/* Redirect for unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

