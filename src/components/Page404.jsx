import React from "react";
import { Link } from "react-router-dom";
const Page404 = () => {
    return(
        <>
            <h1>404</h1>
            <p>Opps! The page you are looking for does not present at the moment</p>
            <Link to="/">Go to the Home Page</Link>
        </>
    )
}

export default Page404;