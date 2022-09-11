import React from "react";
import { useSelector } from "react-redux";

function Notifications() {
  const { available, zoomLink } = useSelector(({ user }) => user);
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
            {zoomLink}
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
