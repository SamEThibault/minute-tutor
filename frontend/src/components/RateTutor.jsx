import React from "react";

function RateTutor() {
  return (
    <div className="rate-tutor-container">
      <h1>How was your tutor?</h1>
      <div className="">
        {[1, 2, 3, 4, 5].map((star, i) => (
          <div>{star}</div>
        ))}
      </div>
    </div>
  );
}

export default RateTutor;
