import React, { useState, useTransition } from "react";

const Transition = () => {
  {
    const [list, setList] = useState([
      "To-do App",
      "Chat GPT - ReactJS",
      "Shopssy - ECommerce",
      "Find Me - Location Tracker",
      "Paisa - your expence tracker",
    ]);
    // Hold the function execution using useStateHook
    // const [pending, setPending] = useState(false);
    // useTransition hook
    const [pending, startTransition] = useTransition(false);
    const [showProject, setShowProject] = useState(false);
    // function
    const viewProjects = async() => {
      console.log("View Projects");
      //   setPending(true);
      // complex logic here
     await startTransition(
        async () => await new Promise((resp) => {
            setTimeout(resp, 5000);
            setShowProject(true);
        })
      );
      //   await new Promise((resp) => setTimeout(resp, 2000));
      //   setPending(false);
    };
    return (
      <>
        <h3>Transition Component - useTransition hook</h3>
        <p>This is Transition Component</p>
        <hr />
        <div>
            <button type="button">Normal</button>
          <button
            type="button"
            disabled={pending}
            onClick={() => viewProjects()}
          >
            View Projects
          </button>
        </div>
        {pending ? <h4>Loading...</h4> : null}

        {showProject ? (
          <div>
            <h2>Projects</h2>
            <ol>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        ) : null}
      </>
    );
  }
};

export default Transition;
