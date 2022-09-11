import React from "react";
import { useState } from "react";
import { signup } from "../utils/authentication";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPassword,
  setUsername,
  setVerifyPassword,
} from "../redux/authenticationSlice";
import { setUserType } from "../redux/userSlice";
function Signup(e) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { username, password, verifyPassword } = useSelector(
    ({ auth }) => auth
  );
  const { userType } = useSelector(({ user }) => user);

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
          navigate(userType === "student" ? "/students" : "/tutors");
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
    <div className="signin">
      <form action="" className="signin-form col-c-c" onSubmit={handleSignup}>
        <h1 className="text-6xl">Minute Tutor</h1>
        <div className="signup-usertype row-se-c">
          <div
            className="tutor-student row-c-c text-2xl shadow-md rounded py-2 px-5"
            onClick={() => dispatch(setUserType("student"))}
            style={{ color: userType === "student" ? "green" : "black" }}
          >
            Student
          </div>
          <div
            className="tutor-student row-c-c text-2xl shadow-md rounded py-2 px-5"
            onClick={() => dispatch(setUserType("tutor"))}
            style={{ color: userType === "tutor" ? "green" : "black" }}
          >
            Tutor
          </div>
        </div>

        <input
          type="text"
          className="py-2 pl-2 text-lg rounded sigin-user-name"
          placeholder="User Name"
          onChange={(e) => {
            dispatch(setUsername(e.target.value));
          }}
        />
        <input
          type="text"
          className="py-2 pl-2 text-lg rounded signin-password"
          placeholder="Password"
          onChange={(e) => {
            dispatch(setPassword(e.target.value));
          }}
        />
        <input
          type="text"
          className="py-2 pl-2 text-lg rounded signin-password"
          placeholder="Confirm Password"
          onChange={(e) => {
            dispatch(setVerifyPassword(e.target.value));
          }}
        />
        <button
          className="signin-button bg-green-500 text-2xl py-2 text-white rounded"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <button
          className="signup-link row-fe-c mt-5"
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
