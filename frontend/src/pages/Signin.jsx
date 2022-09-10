import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPassword, setUsername } from "../redux/authenticationSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
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

    fetch("http://127.0.0.1:5000/signin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          navigate("/tutors");
          alert("Logged in");
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
        <h1>Minute Tutor</h1>
        <input
          type="text"
          className="sigin-user-name"
          placeholder="Name"
          value={username}
          onChange={(e) => {
            dispatch(setUsername(e.target.value));
          }}
        />
        <input
          type="text"
          className="signin-password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            dispatch(setPassword(e.target.value));
          }}
        />
        <button className="signin-button" onClick={handleSignIn}>
          Sign In
        </button>
        <button
          className="signup-link"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signin;
