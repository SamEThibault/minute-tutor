import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAvailable, setMeetingActive } from "../redux/userSlice";

function Notifications() {
  const { available, zoomLink, username } = useSelector(({ user }) => user);
  const dispatch = useDispatch()

  const handleEnd = () =>
  {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    dispatch(setAvailable(true))

    fetch("http://127.0.0.1:5000/closesession", requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div id="notifications" className="notifications col-c-c">
      <h1 className="text-6xl mb-6">Pending Students</h1>
      {!available ? (
        <>
          <a
            className="tutor-zoom bg-green-500 rounded text-white text-4xl px-10 py-5"
            href={zoomLink}
            target="noreferrer"
          >
            Join Zoom
          </a>

          <a
          className="cursor-pointer tutor-zoom-end text-2xl bg-red-500 rounded text-white text-4x1 px-10 py-5 mt-5"
          onClick={handleEnd}
          >
          The meeting has concluded
          </a>
        </>
      ) : (
        <h1 className="no-student text-3xl px-4  py-2 rounded">
          No students requesting help . . .
        </h1>
      )}
    </div>
  );
}

export default Notifications;
