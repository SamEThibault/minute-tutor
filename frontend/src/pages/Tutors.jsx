import React from "react";
import { useState } from "react";
import Notifications from "../components/Notifications";
import Preview from "../components/Preview";
import Nav from "./Nav";
function Tutors() {
  const pages = {
    preview: "Preview",
    profile: "Profile",
    notifications: "Notifications",
  };
  const [page, setPage] = useState(pages.preview);
  switch (page) {
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
          <Nav />
          <div className="tutor-container">
            <div className="tutor-preview">Preview</div>
            <div className="tutor-profile">Profile</div>
            <div className="tutor-notifications">Notifications</div>
          </div>
        </>
      );
  }
}

export default Tutors;
