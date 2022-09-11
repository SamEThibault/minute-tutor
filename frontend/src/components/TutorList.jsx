import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTutor } from "../redux/userSlice";
import TutorDetails from "./TutorDetails";
function TutorList() {
  const { tutorList } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  return (
    <div className="tutor-list-container col-c-c">
      {tutorList?.map((tutor, i) => (
        <button
          className="tutor shadow-md"
          key={i}
          onClick={() => {
            dispatch(setSelectedTutor(tutor));
            console.log(tutor);
          }}
        >
          <div className="tutor-header">
            <h1>{tutor?.username}</h1>
            <h3>{tutor?.expertise}</h3>
          </div>
          <div className="tutor-info">
            <div>
              {tutor?.tags.map((tag) => (
                <div>{tag}</div>
              ))}
            </div>
            <div>{tutor?.rating}</div>
          </div>
        </button>
      ))}
      <TutorDetails />
    </div>
  );
}

export default TutorList;
