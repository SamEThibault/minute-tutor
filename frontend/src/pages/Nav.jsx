import React from "react";
import FEMALE from "../assets/FEMALE.svg";

function Nav() {
  return (
    <div className="nav-container row-sb-c">
      <h1>Minute Tutor</h1>
      <div className="row-sb-c">
        <img src={FEMALE} alt="" />
        <p>Tutor Name</p>
      </div>
    </div>
  );
}

export default Nav;
