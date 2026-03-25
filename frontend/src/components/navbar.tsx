
const logo = './illustrations/Logo.svg'

import { useState } from "react";
import { NavLink } from 'react-router-dom';

function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <nav id="navbar">
    <div className="nav-left">
        <img id="logo" src={logo} alt="logo" /> 
        <h1>PELAJAR DATA</h1>
    </div>
    <div className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
    <div className={"nav-center" + (menuOpen ? " open" : "") }>
      <NavLink to="/">About Us</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/collaborate">Let's Collab</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  </nav>;
};

export default navbar;