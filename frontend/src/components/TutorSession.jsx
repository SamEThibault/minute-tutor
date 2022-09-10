import React from "react";

function TutorSession() {
  if (true)
    return (
      <div>
        {" "}
        <h1>Waiting for tutor...</h1>
        <button className="tutor-session-cancel">Cancel</button>
      </div>
    );
  else return <div>Zoom Link:</div>;
}

export default TutorSession;
