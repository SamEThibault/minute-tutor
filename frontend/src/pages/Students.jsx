import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TutorList from "../components/TutorList";
import { setTopicChoice, setTutorList } from "../redux/userSlice";

function Students() {
  const { subject } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const handleTopicChoice = (subject) => {
    dispatch(setTopicChoice(subject));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    console.log(subject);
    urlencoded.append("subject", subject);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/tutors", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.tutors) {
          console.log(result.tutors);
          dispatch(setTutorList(result.tutors));
          alert("Filter Selected");
        } else {
          alert("Filter Failed");
        }
      })
      .catch((error) => {
        alert(error);
        return error;
      });
  };
  return (
    <div className="students col-c-c">
      <h1>What subject would you like help in...</h1>
      <div className="subject-filter col-c-fs">
        {["computer science", "life sciences", "history", "biology"].map(
          (subject) => (
            <button
              className="shadow-md"
              onClick={() => {
                handleTopicChoice(subject);
              }}
            >
              {subject}
            </button>
          )
        )}
      </div>
      <TutorList />
    </div>
  );
}

export default Students;
