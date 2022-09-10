import React from "react";
import { useState } from "react";
import { signup } from "../utils/authentication";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPassword,
  setUsername,
  setUserType,
  setVerifyPassword,
} from "../redux/authenticationSlice";
function Signup(e) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { username, password, verifyPassword, userType } = useSelector(
    ({ auth }) => auth
  );

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== verifyPassword) {
      setError("Passwords not same.");
      console.log("PASSWORDS NOT SAME");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Disallow", "/not-for-robots.html");
    myHeaders.append("User-Agent", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("userType", userType);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          navigate("/tutors");
          alert("Logged in");
        } else {
          alert(result.body);
        }
        return result;
      })
      .catch((error) => {
        alert(error);
        return error;
      });
  };

  return (
    <div className="signup">
      <form action="" className="signup-form col-c-c" onSubmit={handleSignup}>
        <div className="signup-usertype row-se-c">
          <div
            className="signup-student"
            onClick={() => dispatch(setUserType("student"))}
          >
            Student
          </div>
          <div
            className="signup-tutor"
            onClick={() => dispatch(setUserType("tutor"))}
          >
            Tutor
          </div>
        </div>
        <h1>Minute Tutor</h1>
        <input
          type="text"
          className="signup-user-name"
          placeholder="User Name"
          onChange={(e) => {
            dispatch(setUsername(e.target.value));
          }}
        />
        <input
          type="text"
          className="signup-password"
          placeholder="Password"
          onChange={(e) => {
            dispatch(setPassword(e.target.value));
          }}
        />
        <input
          type="text"
          className="signup-confirm"
          placeholder="Confirm Password"
          onChange={(e) => {
            dispatch(setVerifyPassword(e.target.value));
          }}
        />
        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
        <button
          className="signin-link"
          onClick={() => {
            navigate("/");
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Signup;
