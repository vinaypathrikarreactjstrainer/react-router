import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // routing to one page to another page
  // function
  const navigation = (path) => {
    let isNavigate = false;
    if (isNavigate) {
      navigate(path);
    } else {
      navigate(path);
    }
  };

  // useLocation() =>
  const location = useLocation();
  console.log("location => ", location);

  return (
    <>
      <h1>Home Page</h1>
      <button type="button" onClick={() => navigation("/about")}>
        Go to the About Us Page
      </button>
      <br />
      <button type="button" onClick={() => navigation("/contact")}>
        Go to the Contact Us Page
      </button>
      <br />
    </>
  );
};
export default Home;
