import React from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Profile from "./pages/profile/profile";
import About from "./pages/about/About";
import WorkExperience from "./pages/work-experience/work";
import Projects from "./pages/project/Project";
import Interests from "./pages/interests/Interest";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<WorkExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
