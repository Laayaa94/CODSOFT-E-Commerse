import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password' />

        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? 
          <span>Login here</span>
          <div className="loginsignuop-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terms & privacy policy</p>
          </div>
        </p>
      </div>

      
    </div>
  )
}

export default LoginSignup
