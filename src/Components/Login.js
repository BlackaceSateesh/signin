import React from 'react';

import "../Components/Login.css"


const Login = (props) => {

  return (

    <div className="login-container">


      <div className="login-right">
        <h1 className="s-card-heading">Create Account</h1>
        <div className="social-icon"></div>
        <p className="s-card-para">Or Enter your email address to Sign up FREE</p>

        <div className="signin-form">
          <form >
            <input type="email" className="signin-input" placeholder='Enter your email' />
            <input type="password" className="signin-input" placeholder='Enter your password' />
          </form>
        </div>
        <button type='submit' className="sign-btn">sign in</button>
      </div>

      <div className="login-left">
      <div className="s-card-heading">Hello friend !</div>
        <div className="s-card-para">Enter your personal details and start journey with us</div>
        <button onClick={props.signInEventHandler} onDoubleClick={props.signInDb} className='sign-btn'>sign up</button>
      </div>
    </div>

  )
}

export default Login;

