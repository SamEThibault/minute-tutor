import React from "react";
import Nav from "../pages/Nav";
import { useDispatch, useSelector } from "react-redux";
import { setMeetingActive } from "../redux/userSlice";

function Preview() {
  const {
    expertise,
    tags,
    rating,
    language,
    gender,
    email,
    zoomLink,
    joinZoom,
  } = useSelector(({ user }) => user);
  const { username } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  return (
    <>
      <div id="preview" className="preview-container">
        <h1 className="text-6xl mb-8">Tutor Preview</h1>
        <div className="tutor-details-container col-c-fs ">
          <h1 className="text-5xl">{username ?? "No Name"}</h1>
          <h3 className="text-grey-500 text-2xl">
            {expertise ?? "No Expertise"}
          </h3>
          <div className="tutor-info">
            <div className="row-se-c tags-list my-3">
              {tags?.map((tag) => (
                <div className="tag py-1 px-2">{tag}</div>
              ))}
            </div>
            <div>{rating}</div>
            <div className="tutor-small-details ">
              <p className="text-lg">Language: {language ?? "No Specified"}</p>
              <p className="text-lg">Gender: {gender ?? "No Specified"}</p>
              <p className="text-lg">Email: {email ?? "No Specified"}</p>
            </div>
          </div>
          <a
            href={zoomLink}
            target="noreferrer"
            className="zoom-link shadow-md bg-green-500 text-white rounded py-1 px-10 mt-4"
            onClick={joinZoom}
          >
            Join Zoom
          </a>
        </div>
      </div>
    </>
  );
}

export default Preview;
