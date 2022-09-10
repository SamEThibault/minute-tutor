import React from "react";

function TutorList() {
  return (
    <div className="tutor-list-container">
      {[1, 2, 3, 4].map((tutor, i) => (
        <div className="tutor">
            <h1>Tutor Name</h1>
          <img src="" alt="" />
        </div>
      ))}
    </div>
  );
}

export default TutorList;
