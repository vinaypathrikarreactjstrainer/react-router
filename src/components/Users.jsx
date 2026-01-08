import React from "react";
import { useParams } from "react-router-dom";


const Users = () => {
    const urlParams = useParams();
    const {person} = urlParams;    
    return(
        <>
            <h1>Users</h1>
            <p>This is {person} component</p>
        </>
    )
}

export default Users;