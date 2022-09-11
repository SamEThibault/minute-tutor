import React from "react";
import Nav from "../pages/Nav";
import { useDispatch, useSelector } from "react-redux";
import { setMeetingActive } from "../redux/userSlice";

function Preview() {
    const {
        username,
        expertise,
        tags,
        rating,
        language,
        gender,
        email,
        zoomLink,
        joinZoom,
        
      } = useSelector(({ user }) => user);
      const dispatch = useDispatch();
  return (
    <>
      <div id="preview" className="preview-container">
      <h1>Tutor Preview</h1>
      <div className="tutor-details-container shadow-md">
        <h1>{username ?? "No Name"}</h1>
        <h3>{expertise ?? "No Expertise"}</h3>
        <div className="tutor-info">
          <div>
            {tags?.map((tag) => (
              <div>{tag}</div>
            ))}
          </div>
          <div>{rating}</div>
          <div className="tutor-small-details ">
            <p>Language: {language ?? "No Specified"}</p>
            <p>Gender: {gender ?? "No Specified"}</p>
            <p>Email: {email ?? "No Specified"}</p>
          </div>
        </div>
        <a
          href={zoomLink}
          target="noreferrer"
          className="zoom-link shadow-md bg-green-300 rounded"
          onClick={()=>{dispatch(setMeetingActive(true))}}
        >
            Join Zoom
        </a>
      </div>
      </div>
    </>
  );
}

export default Preview;
