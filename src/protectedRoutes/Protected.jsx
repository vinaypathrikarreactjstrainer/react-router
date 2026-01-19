import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        console.log('protected login ', login);
        if(login){
            navigate('/login');
        }
    })
    return(
        <>
            <h3>Protected Routes</h3>
            <Component />
        </>
    )
}
export default Protected;