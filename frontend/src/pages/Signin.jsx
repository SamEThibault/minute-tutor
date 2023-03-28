import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPassword, setUsername } from "../redux/authenticationSlice";
import { setUpdateTutor } from "../redux/userSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, password, verifyPassword } = useSelector(
    ({ auth }) => auth
  );

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(username, password);
    var myHeaders = new Headers();
    myHeaders.append("Disallow", "/not-for-robots.html");
    myHeaders.append("User-Agent", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("/signin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          navigate("/tutors");
          // alert("Logged in as tutor");
          dispatch(setUpdateTutor(result.info));
        } else if (result.status === 220) {
          navigate("/students");
          // alert("Logged in as student");
        } else {
          alert(result.body);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="signin">
      <form action="" className="signin-form col-c-c" onSubmit={handleSignIn}>
        <h1 className="text-6xl">Minute Tutor</h1>
        <div className="signin-inputs col-c-c">
          {/* USER NAME */}
          <input
            type="text"
            className="py-2 pl-2 text-lg rounded sigin-user-name"
            placeholder="Name"
            value={username}
            onChange={(e) => {
              dispatch(setUsername(e.target.value));
            }}
          />
          {/* PASSWORD*/}
          <input
            type="text"
            className="py-2 pl-2 text-lg rounded signin-password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              dispatch(setPassword(e.target.value));
            }}
          />
        </div>

        <button
          className="signin-button text-2xl bg-green-500 py-2 text-white rounded"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <div className="signup-link row-fe-c">
          <button
            className=""
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
