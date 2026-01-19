import React from "react";
import { useLocation } from "react-router-dom";

const Info = () => {
    const location = useLocation();
    console.log('info location ', location);
    return(
        <>
            <p><b>{location.pathname}</b></p>
            <h1>Company Information</h1>
            <p>This is company information page</p>
        </>
    )
}

export default Info;