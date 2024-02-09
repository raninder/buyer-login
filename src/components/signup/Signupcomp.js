import { useState } from 'react';
import './Signup.css'
import Logo from "../../assets/icons/logo.png";
import { Link } from 'react-router-dom'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const Signupcomp = () => {
  const [email, setEmail]  = useState(null)
  const [password, setPassword] = useState(null)
  const [errorMsg, setErrorMsg] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const register = () =>{
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
  }

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }

  return(
    <div className='signup-container'>
       <div className='login'>
          <img src={Logo} alt="Company Logo" className="logo" />
           <h1> Let's get started</h1>
           <form>
              <label id='email'>Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                type='email'
              />
             <label id='password'>Password:</label>
              <input 
                type={type}
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                 />
                 {/* <span class="flex justify-around items-center" onClick={handleToggle}> */}
                 <span className="eye-icon" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={20}/>
              </span>
              <b >{errorMsg}</b>
              <button type='submit' onClick={register} >SignUp</button>
            </form>
            <p>
               I have an account!{" "}
              <span>
                <Link to="/login" style={{ textDecoration: 'none' }}>Sign In</Link>
              </span>
            </p>
    
            <fieldset className="title">
              <legend>or continue with</legend>
            </fieldset>
            <div className="social">
                <button type="button" className="google-btn" >Google </button>
                <button type="button"  className="fb-btn" ><FontAwesomeIcon className="fb" icon={faFacebook} size="2x" />   Facebook </button>
            </div>
        </div>
        <div className='right-img'>
          <img src={"https://img.freepik.com/free-photo/house-3d-rendering-design_23-2150505826.jpg?size=626&ext=jpg"} alt="Company Logo" className="d3img" />
        </div>
    </div>
    )

}

export default Signupcomp