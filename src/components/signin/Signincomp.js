import { useState, useEffect } from 'react';
import './Signin.css'
import LoginTrue from './LoginTrue';
import LoginForm from './LoginForm'
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '../../firebase';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { selectUserEmail, selectUserName } from '../../features/userSlice';
import { login,logout, selectUser } from '../../features/userSlice';
import  {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


const Signincomp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [userLogged, setUserLogged] = useState();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const navigate = useNavigate();

  const handleGoogleLogin = () =>{
  let provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
      .then((result)=>{
        setIsLogin(true);
        setUser(result.user)
        const docRef = doc(db, 'users', result.user.uid)
         setDoc(docRef, {
        name:auth.currentUser.displayName||null,
        mobile: auth.currentUser.phone||null,
        email: auth.currentUser.email||null,
        userImg: auth.currentUser.photoURL||null,
      },{ merge: true })
        localStorage.setItem("user", JSON.stringify(result.user));
      } )
      .catch( (e) => {
      
        alert(`login error ${e}`);
        setIsLogin(false); 
      })
 }

 const handleFacebookLogin = () =>{
  let provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
      .then((result)=>{
        setIsLogin(true);
        setUser(result.user)
      } )
      .catch( (e) => {
        alert(`login error ${e}`);
        setIsLogin(false); 
      })
 }


  

//Function to logout user
     const handleLogout = () => {
      auth.signOut()
      .then(()=> {
        setIsLogin(false);
        setUser(null)
        dispatch(logout())
      })
      .catch((err)=>alert(err.message))
    }

  return(
    // { isLogin ?    navigate("/form1") 
    <div>
    
    {/* { userLogged ?    navigate("/form1")  */}
    { isLogin ?    navigate("/form1") 
     
    :
    <LoginForm setIsLogin = {setIsLogin} googleLogin={handleGoogleLogin} facebookLogin={handleFacebookLogin} />
    }


      
    </div>
    )

}

export default Signincomp