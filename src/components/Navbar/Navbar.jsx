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
            <li><NavLink to="/users/akansha" state = {{name: 'akansha', age: 28, city: 'nashik'}}>Akansha</NavLink></li>
            <li><NavLink to="/users/aditya" state = {{name: 'aditya', age: 23, city : 'Pune'}}>Aditya</NavLink></li>
            <li><NavLink to="/users/aaishwarya" state = {{name: 'aishwarya', age: 20, city: 'Mumbai'}}>Aaishwarya</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
    </>
  );
};

export default Navbar;
