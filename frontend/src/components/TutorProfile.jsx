import React from "react";
import Container from "./Container";

function TutorProfile() {
  return (
    <div className="tutor-profile-container">
      <Container>
        <div className="tutor-profile-content">
          <input type="text" placeholder="Tutor Name" />
          <input type="text" placeholder="Zoom Link" />
          <input type="text" placeholder="Tags" />
          <input type="text" placeholder="Expertise" />
          <input type="text" placeholder="Email" />
        </div>
      </Container>
    </div>
  );
}

export default TutorProfile;
