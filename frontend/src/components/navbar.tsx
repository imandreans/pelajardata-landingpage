
const logo = './src/assets/vectors/Logo.svg'


import { useState } from "react";
  import { Link } from 'react-router-dom';

function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <nav id="navbar">
    <div className="nav-left">
<svg
   width="30"
   height="30"
   viewBox="0 0 120 120"
   version="1.1"
   id="svg1"
   xmlns="http://www.w3.org/2000/svg">
  <defs id="defs1" />
  <g id="layer1">
    <g
       id="g1"
       transform="matrix(0.59460693,0,0,0.59460693,8.513878,-0.0160565)">
      <path
         d="M 0.00882574,154.244 0,126.95 l 80.3768,46.254 2.6354,1.456 0.1974,27.208 z M 89.9768,174.947 173.177,126.949 v 27.31 l -82.7247,47.582 z"
         fill="#cddef1"
         id="path1"
         style={{ fill: "#cbdceb", fillOpacity: 1 }} />
      <path
         d="M 0,118.29 V 90.8526 l 83.0122,47.8684 -0.4115,26.977 z m 90.3534,20.396 82.8236,-47.8644 -0.011,27.2804 -82.8135,47.656 z"
         fill="#94b3df"
         id="path2"
         style={{ fill: "#608bc1", fillOpacity: 1 }} />
      <path
         d="M 0.0125276,82.7138 0,53.9403 83.1781,101.914 83.2009,130.338 Z M 90.5415,101.672 173.177,53.8963 173.171,82.7138 90.3448,130.369 Z M 3.68246,47.8189 86.4003,0 169.375,47.6459 86.4003,95.6722 Z"
         fill="#050b2f"
         id="path3" />
      <path
         d="M 0.0125276,82.7138 0,53.9403 83.1781,101.914 83.2009,130.338 Z M 90.5415,101.672 173.177,53.8963 173.171,82.7138 90.3448,130.369 Z M 3.68246,47.8189 86.4003,0 169.375,47.6459 86.4003,95.6722 Z"
         fill="#050b2f"
         id="path4"
         style={{ fill: "#133e87", fillOpacity: 1 }} />
    </g>
  </g>
</svg>
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