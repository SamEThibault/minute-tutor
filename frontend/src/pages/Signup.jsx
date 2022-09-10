import React from 'react'
import { useState } from 'react';
import { signup } from '../utils/authentication';

function Signup() {
  const [error, setError] = useState("");
  const handleSignup = () => {
    let status = signup();
    console.log(status);
    // if (userName == "test") {
    //   // dispatch(setLoginVerify(true));
    //   // navigate("/personal-info");
    // }

    // if (status == 200) {
    //   dispatch(setLoginVerify(true));
    //   navigate("/personal-info");
    // } else {
    //   return setError("Account not found, please sign up");
    // }
  }

  return (
    <div className="signup">
        <form action="" className="signup-form col-c-c">
            <h1>Minute Tutor</h1>
            <input type="text" className="signup-user-name" placeholder='User Name' />
            <input type="text" className="signup-password" placeholder='Password' />
            <input type="text" className="signup-confirm" placeholder='Confirm Password' />
            <button className="signup-button" onClick={handleSignup}>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup