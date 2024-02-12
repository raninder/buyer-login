import { useState } from 'react';
import './Signin.css'
import Logo from "../../assets/icons/logo.png";
import { Link } from 'react-router-dom'
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import signin from "../../assets/images/signin.png"
import Google from "../../assets/images/Google.png"
import Facebook from "../../assets/images/Facebook.png"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import {
  auth,
  gprovider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '../../firebase.config';
import { login,logout, selectUserEmail, selectUserName } from '../../features/userSlice';
import  {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

const Signupcomp = () => {
  const [email, setEmail]  = useState(null)
  const [password, setPassword] = useState(null)
  const [errorMsg, setErrorMsg] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)


  const handleLogin = (e) =>{
    e.preventDefault();
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

 const handleGLogin = () =>{
  let provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
      .then((result)=>{
        //action.payload
        dispatch(login({
          userName: result.user.displayName,
          userEmail: result.user.email
        }))
      } )
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
                  <span className="eye-icon" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={20}/>
              </span>
              <b >{errorMsg}</b>
              <button type='submit' onClick={handleLogin}>Login</button>
            </form>
            <p>
               New user!{" "}
              <span>
                <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
              </span>
            </p>
    
            <fieldset className="title">
              <legend>or continue with</legend>
            </fieldset>
            <div className="social">
               <button type="button" className="google-btn" onClick = {handleGLogin}><img src={Google} alt="google"></img><span>Google </span></button>
               <button type="button" className="fb-btn" ><img src={Facebook} alt="google"></img><span>Facebook</span> </button>
                {/* <Link to = '/facebook'><button type="button"  className="fb-btn" ><FontAwesomeIcon className="fb" icon={faFacebook} size="2x" />   Facebook </button></Link> */}
            </div>
        </div>
        <div className='right-div'>
          <img src={signin} alt="Company Logo" className="d3img" />
        </div>
    </div>
    )

}

export default Signupcomp