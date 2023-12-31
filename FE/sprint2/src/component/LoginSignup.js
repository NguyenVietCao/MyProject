import React, { useState } from 'react';
import '../component/LoginSignup.css'


function LoginSignup(props) {
    const [action, setAction] = useState("Login")
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{ action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> : <div className='input'>
                    <image srs="" alt="" ><i className="far fa-user"></i></image>
                    <input type='text' placeholder='Name' />
                </div>}
              
                <div className='input'>
                    <image srs="" alt="" ><i className="far fa-envelope"></i></image>
                    <input type='email' placeholder='Email'/>
                </div>
                <div className='input'>
                    <image srs="" alt="" ><i className="fal fa-lock"></i></image>
                    <input type='password' placeholder='Password'/>
                </div>
                {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Lost Password? <span>Click here!</span></div>}
              
                <div className='submit-container' >
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login")}}>Login</div>
                </div>
            </div>


        </div>
    );
}

export default LoginSignup;