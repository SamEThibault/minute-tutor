import React from "react";
import { useState } from "react";
import Container from "../components/Container";
import Notifications from "../components/Notifications";
import Preview from "../components/Preview";
import Nav from "./Nav";
function Tutors() {
  const pages = {
    dasboard: "Dashboard",
    preview: "Preview",
    profile: "Profile",
    notifications: "Notifications",
  };
  const [page, setPage] = useState("Dashboard");
  switch (page) {
    case pages.dashboard:
      return (
        <>
          <Nav />
          <div className="tutor-container">
            <div className="tutor-preview">Preview</div>
            <div className="tutor-profile">Profile</div>
            <div className="tutor-notifications">Notifications</div>
          </div>
        </>
      );
    case pages.preview:
      return (
        <>
          <Nav />
          <Preview />
        </>
      );
    case pages.notifications:
      return (
        <>
          <Nav />
          <Notifications />
        </>
      );
    default:
      return (
        <>
          <div className="tutors-container">
          <Nav />
            <Container classProp={"tutors"}>
              <div className="tutor-link tutors-preview">Preview</div>
              <div className="tutor-link tutors-notifications">Notifications</div>
              <div className="tutor-link tutors-profile">Profile</div>
            </Container>
          </div>
        </>
      );
  }
}

export default Tutors;
