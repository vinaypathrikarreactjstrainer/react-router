import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><Link to="/">Link</Link></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/users/akansha">Akansha</NavLink></li>
            <li><NavLink to="/users/aditya">Aditya</NavLink></li>
            <li><NavLink to="/users/aaishwarya">Aaishwarya</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
    </>
  );
};

export default Navbar;
