import React from "react";

function Notifications() {
  return (
    <div className="notifications">
      <div className="notifications">
        <div className="notifications-header">
          <h3>Student</h3>
          <h3>Subject</h3>
          <h3>Description</h3>
        </div>
        {[1, 2, 3].map((student, i) => (
          <div className="student-container">{1}</div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
