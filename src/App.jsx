// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import ProjectDetails from "./pages/ProjectDetails";
import BlogList from "./pages/BlogList";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostDetails />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;
