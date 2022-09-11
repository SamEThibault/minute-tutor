import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTutor } from "../redux/userSlice";

export default function TutorDetails() {
  const dispatch = useDispatch();
  const { selectedTutor } = useSelector(({ user }) => user);
  const joinZoom = async (e) => {

    var myHeaders = new Headers();
    myHeaders.append("Disallow", "/not-for-robots.html");
    myHeaders.append("User-Agent", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", selectedTutor.username);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/requesttutor", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
            
            
              alert("Tutor has been notified");
        } else {
          alert("Failed to alert tutor.");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    return () => {
      dispatch(setSelectedTutor({}));
    };
  }, []);
  return (
    <>
      {selectedTutor.username && (
        <div className="tutor-details-container shadow-md">
          <h1>{selectedTutor?.username}</h1>
          <h3>{selectedTutor?.expertise}</h3>
          <div className="tutor-info">
            <div>
              {selectedTutor?.tags?.map((tag) => (
                <div>{tag}</div>
              ))}
            </div>
            <div>{selectedTutor?.rating}</div>
            <div className="tutor-small-details ">
              <p>Language: {selectedTutor.language}</p>
              <p>Gender: {selectedTutor.gender}</p>
              <p>Email: {selectedTutor.email}</p>
            </div>
          </div>
          <a
            href={selectedTutor.zoomLink}
            target="noreferrer"
            className="zoom-link shadow-md bg-green-300 rounded"
            onClick={joinZoom}
          >
            {selectedTutor.zoomLink}
          </a>
        </div>
      )}
    </>
  );
}
