import React from "react";
import { Link, Outlet } from "react-router-dom";
const About = () => {
    return(
        <>
            <h1>About Us...</h1>
            <p>This is About Us page</p>
            <p>Here, we can show the content of About Us Page</p>
            <Link to = '/about/info'>Company Info</Link>
            <Link to = '/about/career'>Career</Link>
            <Link to = '/about/locations'>Locations</Link>
            <Outlet />
        </>
    )
}

export default About;