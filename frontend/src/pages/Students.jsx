import { React, useState } from "react";
import { useDispatch } from "react-redux";

function Students() {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");
  const handleSubject = (subject) => {
    setSubject(subject);
  };
  return (
    <div className="students col-c-c">
      <h1>What subject would you like help in...</h1>
      <div className="subject-filter col-c-fs">
        {["computer science", "life sciences", "history", "biology"].map(
          (subject) => (
            <button>{subject}</button>
          )
        )}
      </div>
    </div>
  );
}

export default Students;
