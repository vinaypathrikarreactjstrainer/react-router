import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const signIn = () => {
        localStorage.setItem('login', true);
        navigate('/');
    };
    useEffect(() => {
        let login = localStorage.getItem('login');
        console.log('login login ', login);
        if(!login){
            navigate('/');
        }
    });
    const signOut = () => {
        localStorage.setItem('login', false);
        navigate('/login');
    }
  return (
    <>
      <input type="text" placeholder="User Name" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button type="button" onClick={() => signIn()}>
        Login
      </button>
      <button type="button" onClick={() => signOut()}>
        Logout
      </button>
    </>
  );
};
export default Login;
