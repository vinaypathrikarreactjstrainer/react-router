import React from "react";
import { useParams, useLocation } from "react-router-dom";


const Users = () => {
    const myLocation = useLocation();
    const urlParams = useParams();
    
    const {person} = urlParams;
    console.log('myLocation ', myLocation);    
    console.log('myLocation ', myLocation.state); 
     
    return(
        <>
            <h1>Users</h1>
            <p><i>{myLocation.pathname}</i></p>
            <p><b>Name: {myLocation.state.name}</b></p>
            <p><b>Age: {myLocation.state.age}</b></p>
            <p><b>City: {myLocation.state.city}</b></p>
            <p>This is {person} component</p>
        </>
    )
}

export default Users;