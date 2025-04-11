// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">Portfolio</h2>
//       <div className="nav-links">
//         <NavLink to="/">Profile</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/work">Work</NavLink>
//         <NavLink to="/projects">Projects</NavLink>
//         <NavLink to="/interests">Interests</NavLink>
//         <NavLink to="/education">Education</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => setIsMobile(!isMobile);
  const closeMenu = () => setIsMobile(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Hari Prasad</h2>

      <div className={`nav-links ${isMobile ? "nav-links-mobile" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Profile
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/experience" onClick={closeMenu}>
          Work
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/interests" onClick={closeMenu}>
          Interests
        </Link>
        <Link to="/education" onClick={closeMenu}>
          Education
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      <button className="mobile-menu-icon" onClick={handleToggle}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
