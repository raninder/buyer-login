import { useState } from 'react';
import './Signin.css'
import LoginTrue from './LoginTrue';
import LoginForm from './LoginForm'
// import {
//   auth,
//   createUserWithEmailAndPassword,
//   updateProfile,
//   signInWithEmailAndPassword,
// } from '../../firebase.config';
// import { login,logout, selectUserEmail, selectUserName } from '../../features/userSlice';
// import  {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import { useDispatch, useSelector } from 'react-redux';

const Signupcomp = () => {
  const [isLogin, setIsLogin] = useState(false);
  // const dispatch = useDispatch();
  // const userName = useSelector(selectUserName)
  // const userEmail = useSelector(selectUserEmail)

//  const handleGLogin = () =>{
//   let provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//       .then((result)=>{
//         setIsLogin(true);
//         //action.payload
//         dispatch(login({
//           userName: result.user.displayName,
//           userEmail: result.user.email
//         }))
//       } )
//       .catch( (e) => {
//         //handle the error when login fails
//         alert(`login error ${e}`);
//         setIsLogin(false); // Sets 'isLogin' to false on login failure
//       })
//  }

//  const handleFLogin = () =>{
//   let provider = new FacebookAuthProvider();
//   signInWithPopup(auth, provider)
//       .then((result)=>{
//         setIsLogin(true);
//         //action.payload
//         dispatch(login({
//           userName: result.user.displayName,
//           userEmail: result.user.email
//         }))
//       } )
//       .catch( (e) => {
//         //handle the error when login fails
//         alert(`login error ${e}`);
//         setIsLogin(false); 
//       })
//  }

// //Function to logout user
//      const handleLogout = () => {
//       auth.signOut()
//       .then(()=> {
//         setIsLogin(false);
//         dispatch(logout())
//       })
//       .catch((err)=>alert(err.message))
//     }

  return(
    <div>
      {/* {isLogin ? <LoginTrue name = {userName} email = {userEmail} logout={handleLogout}/> : <LoginForm googleLogin={handleGLogin} facebookLogin={handleFLogin}/>} */}
       <LoginForm />
    </div>
    )

}

export default Signupcomp