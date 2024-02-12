import { FacebookLoginButton } from "react-social-login-buttons";

const LoginTrue = ({name,email, logout}) => (
  <>
    <h1>Welcome!</h1>
    {/* <img src={user.photoURL} alt="" /> */}
    <p>
      Welcome {name}! Your account {email} has been
      successfully logged in 
    </p>
    <button onClick={logout} >
      <span> Logout </span>
    </button>
  </>
);

export default LoginTrue