import React from 'react'

function Signin() {
  return (
    <div className="signin">
        <form action="" className="signin-form col-c-c">
            <h1>Minute Tutor</h1>
            <input type="text" className="sigin-user-name" placeholder='User Name' />
            <input type="text" className="signin-password" placeholder='Password' />
            <button className="signin-button">Sign In</button>
        </form>
    </div>
  )
}

export default Signin