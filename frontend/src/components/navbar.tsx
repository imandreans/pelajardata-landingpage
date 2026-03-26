
const logo = './src/assets/vectors/Logo.svg'

import { useState } from "react";
  import { Link } from 'react-router-dom';

function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <nav id="navbar">
    <div className="nav-left">
        <img id="logo" src={logo} alt="logo" /> 
        <h1>PELAJAR DATA</h1>
    </div>
    <div className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
    <div className={"nav-center" + (menuOpen ? " open" : "") }>
      <Link to="/">About Us</Link>
      <Link to="/events">Events</Link>
      <Link to="/collaborate">Let's Collab</Link>
      <Link to="/blog">Blog</Link>
    </div>
  </nav>;
};

export default navbar;