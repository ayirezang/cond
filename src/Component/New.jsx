import React, { useState } from "react";

const New = ({ className }) => {
  const [visible, setVisible] = useState(true);

  function loggin() {
    setVisible(!visible);
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-5">
      <div className="flex flex-col space-y-10 text-5xl">
        {visible ? <p>You are logged in</p> : <h1>welcome back!</h1>}
      </div>
      <button
        className={`btn btn-active btn-secondary  ${className}`}
        onClick={loggin}
      >
        {visible ? "Logged in" : "Logged out"}
      </button>
    </div>
  );
};
7;
export default New;
