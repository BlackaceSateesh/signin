import React, { useEffect } from 'react';
import "../Components/Register.css"

const Register = (props) => {
   

    return (

        <div className="register-container">
            <div className="register-left">
                <div className="s-card-heading">Welcome Back !</div>
                <div className="s-card-para">To keep connected with us please loginwith your personal info</div>
                <button  onDoubleClick={props.signUpDb} className='sign-btn'>sign in</button>
            </div>

            <div className="register-right">


                <h1 className="s-card-heading">Create Account</h1>

                <div className="social-icon"></div>

                <p className="s-card-para">Or Enter your email address to Sign up FREE</p>

                <div className="signup-form">
                    <form onSubmit={props.signUpEventHandler}>
                        <input type="text" name='name'  onChange={props.registerData} className="signup-input" placeholder='Enter your name' />
                        <input type="email" name='email'  onChange={props.registerData} className="signup-input" placeholder='Enter your email' />
                        <input type="text" name='username'  onChange={props.registerData} className="signup-input" placeholder='Enter your username' />
                        <input type="password" name='password'  onChange={props.registerData} className="signup-input" placeholder='Create your password' />
                        <input type="password" name='confirmpassword'  onChange={props.registerData} className="signup-input" placeholder='Confirm your password' />

                <button type='submit' className="sign-btn">sign up</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register;