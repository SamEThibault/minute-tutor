import React from "react";
import FEMALE from "../assets/FEMALE.svg";
import Container from "../components/Container";

function Nav() {
  return (
    <div className="nav-container row-sb-c">
      <Container>
        <h1>Minute Tutor</h1>
        <div className="row-sb-c">
          <img src={FEMALE} alt="" />
          <p>Tutor Name</p>
        </div>
      </Container>
    </div>
  );
}

export default Nav;
