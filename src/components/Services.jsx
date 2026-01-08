import React from "react";
import {Link} from 'react-router-dom'
const Services = () => {
  return (
    <>
      <h1>Services Page</h1>
      <p>This is Services page</p>
      <p>Here, we can show the content of Services Page</p>
      <Link to="/">Go to the Home Page</Link>
      <Link to="/about">About Us</Link>
    </>
  );
};

export default Services;
