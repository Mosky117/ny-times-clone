import React, { useState } from "react";

import  '../css/Navbar.css'
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        New York Times
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Books">Book Section</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact">Contact</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;