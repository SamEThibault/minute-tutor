import React from "react";
import { useState } from "react";
import Container from "../components/Container";
import Notifications from "../components/Notifications";
import Preview from "../components/Preview";
import TutorProfile from "../components/TutorProfile";
import Nav from "./Nav";
import FEMALE from "../assets/FEMALE.svg";
import { useEffect } from "react";
import { setAvailable } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import MeetingEnd from "../components/MeetingEnd";

function Tutors() {
  const { username, meetingActive } = useSelector(({ auth }) => auth);
  const { available } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const handleRefresh = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Disallow", "/not-for-robots.html");
    myHeaders.append("User-Agent", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var urlencoded = new URLSearchParams();
    // console.log(username);
    urlencoded.append("username", username);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/checkstatus", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.status == 400) {
          dispatch(setAvailable(false));
        }
      })
      .catch((error) => {
        // alert(error);
      });
  };

  useEffect(() => {
    setInterval(() => {
      handleRefresh();
    }, 5000);
  }, []);
  return (
    <>
      <Nav />
      <Container classProp={"tutors col-c-c"}>
        <img src={FEMALE} alt="" />
        <TutorProfile />
        <Preview />
        <Notifications />
      {meetingActive && <MeetingEnd />  }
      </Container>
    </>
  );
}

export default Tutors;
