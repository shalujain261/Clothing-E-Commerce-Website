

import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email ID"/>
          <input type="password" placeholder="Your Password"/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>By continuing, i agree to term of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup