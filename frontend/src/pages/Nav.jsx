import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { animateScroll as scroll } from "react-scroll";
import { useSelector } from "react-redux";

function Nav() {
  const {zoomLink} = useSelector(({user})=>user)
  const handleScroll = (pageId) => {
    let page = document.getElementById(pageId);

    scroll.scrollTo(page.offsetTop - 200);
  };

  useEffect(()=>{
    if(zoomLink){
      let page = document.getElementById("preview");

      scroll.scrollTo(page.offsetTop - 200);
    }
  },[])

  return (
    <div className="nav-container row-fe-c shadow-md">
      <Container classProp={"nav row-fe-c"}>
        <button
          href="#profile"
          onClick={() => {
            handleScroll("profile");
          }}
        >
          Profile
        </button>
        <button
          href="#preview"
          onClick={() => {
            handleScroll("preview");
          }}
        >
          Preview
        </button>
        <button
          href="#notifications"
          onClick={() => {
            handleScroll("notifications");
          }}
        >
          Zoom Meetings
        </button>
      </Container>
    </div>
  );
}

export default Nav;
