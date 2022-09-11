import {React, useState} from "react"
import {useDispatch} from "react-redux";

function Students()
{
    const dispatch = useDispatch();
    const [subject, setSubject] = useState("");
    const handleSubject = (subject) =>
    {
        setSubject(subject);
    }
    return (
        <div className="students">
            <div className="subject"
            onClick={() => dispatch(handleSubject("computer science"))}>
                Computer Science
            </div>
            <div className="subject">
                Math
            </div>
            <div className="subject"
            onClick={() => dispatch(handleSubject("life sciences"))}>
                Life Sciences
            </div>
            <div className="subject"
            onClick={() => dispatch(handleSubject("history"))}>
                History
            </div>
            <div className="subject"
            onClick={() => dispatch(handleSubject("biology"))}>
                Biology
            </div>
        </div>
    )
}

export default Students