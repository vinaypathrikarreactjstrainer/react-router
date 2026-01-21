import React from "react";
import { useFormStatus } from "react-dom";
import UpdatedObj from "../updation/UpdatedObj";
import UpdatedArray from "../updation/UpdatedArray";
import Transition from "./Transition";

// SignInForm Component
const SignInForm = () => {
    const {pending} = useFormStatus();
    console.log('pending => ', pending);
  return (
    <div>
      <input type="text" placeholder="User Name" />
      <br />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <br />
      <button type="submit" disabled = {pending ? true : false}>
        { 
            pending
            ? 'Submitting...'
            : 'Submit'
        }
      </button>
    </div>
  );
};

const Contact = () => {
  // function
  const onFormSubmit = async () => {
    await new Promise((resp) => setTimeout(resp, 5000));
    console.log("submit..");
  };

  return (
    <>
      <h1>Contact Page</h1>
      <form action={onFormSubmit}>
        <SignInForm />
      </form>
      <Transition />
      {/* <UpdatedObj /> */}
      <hr />
      {/* <UpdatedArray /> */}
    </>
  );
};

export default Contact;
