import React, {useState, useEffect} from "react";
import "./style.css";
import profileEdit from "../../../assets/images/user-settings-profile-edit.svg";
import { IconButton, TextField } from "@mui/material";
import CardTitle from "../shared/CardTitle";
import NormalTitle from "../shared/NormalTitle";
import VerifiedFlag from "../shared/VerifiedFlag";
import PurpleButton from "../shared/PurpleButton";
import "../shared/purpleButton.css"
import formData from "./profileFormData";
import {auth} from '../../../firebase';
import { onSnapshot, updateDoc,doc, setDoc, collection, getDoc } from "firebase/firestore"
import {db} from '../../../firebase';

const CardName = "Judy Garcia";

const InputField = ({ placeholder,name,value,...rest }) => {
  
  return (
    <TextField
      className="user-settings-first-comp-textfield"
      value={value}
      placeholder={placeholder}
      {...rest}
    
    />
  );
};

const FormItem = ({ name,titleName, value, disableFlag, flagStatus, placeholder, emailTip, onChange }) => {
  return (
    <div className="user-settings-first-comp-profile-form-item">
      <div className="user-settings-first-comp-profile-form-title-line">
        <NormalTitle name={titleName} />
        {!disableFlag && <VerifiedFlag status={flagStatus} />}
      </div>
      <InputField placeholder={placeholder} name={name} onChange={onChange} value={value}/>
      {emailTip && <EmailTip />}
    </div>
  );
};


const EmailTip = () => {
  return (
    <div className="user-settings-first-comp-email-tip">
      <div> {"Don't want any emails? \u00a0"} </div>
      <a style={{ color: "#7731E4", fontWeight: "700" }}>Unsubscribe.</a>
    </div>
  );
};

export default function UserSettingsFirstComp() {
  const [userData, setUserData] = useState([]);
  const [isReadonly, setIsReadonly] = useState(true);
  // const userId = auth.currentUser.uid;
  const userId = localStorage.getItem("user")
  console.log("auth id", userId)
  
  useEffect(() => {
    
    if(userId) {
      const docRef = doc(db, "users",userId )
      onSnapshot(docRef, (doc) => {
      setUserData(doc.data())
    })
  
  }
  }, []);

    console.log("userData2", userData)


  const handleUpload = async() =>{
   
    console.log('current User', auth.currentUser.uid, auth.currentUser.displayName);
    console.log("userData3", userData)
    console.log('email', userData.email)
    
    //update userid document with profile data
    try{
      await setDoc(doc(db, "users", auth.currentUser.uid),{
        name:auth.currentUser.displayName||null,
        phoneNumber: userData.mobile||null,
        gender: userData.gender||null,
        email: userData.email,
        address: userData.address||null,
        userImg: auth.currentUser.photoURL||null,
      },
      {merge: true}
      );
      console.log("user record updated successfully")
      alert("user record updated")
    } catch(err){
      console.log("something went wrong", err)
      }

  }

  const handleProfileEdit = (e) => {
    // setIsReadonly(false)
    setUserData({ ...userData, email: e.target.value })
 
    };
    const handleInputChange = (e) => {
      setUserData({ ...userData, mobile: e.target.value })
    };
  return (
    <>
      <div className="user-settings-first-comp-container">
        <div className="user-settings-first-comp-upper-rectangle"></div>
     
       
         <div className="user-settings-first-comp-profile-form">
         
              <FormItem
                name="phoneNumber"
                titleName="Mobile Phone"
                flagStatus="Verified"
                placeholder="123423423"
                disableFlag = {false}
                value = {userData?userData.phoneNumber:''}
                onChange = {(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                
              />

              <FormItem
                name="email"
                titleName="Email Address"
                flagStatus="Verify"
                placeholder="barbarawilson@gmail.com"
                disableFlag = {false}
                value={ userData?userData.email:''}
                emailTip={true}
                // readOnly="readonly"
                // readOnly={isReadonly}
                onChange = { (e) => setUserData({ ...userData, email: e.target.value })}
              />
             <FormItem
                name="gender"
                titleName="Gender"
                placeholder="Female"
                disableFlag = {true}
                value={userData?userData.gender:null}
                onChange = {(e) => setUserData({ ...userData, gender: e.target.value })}
              />

              <FormItem
                name="address"
                titleName="Address"
                flagStatus="Verify"
                placeholder="Toronto, ON, Canada"
                disableFlag = {true}
                value={ userData?userData.address:null}
                onChange = {(e) => setUserData({ ...userData, address: e.target.value })}
              />
         
         </div>
      
        <div className="user-settings-first-comp-save-button">
          {/* <PurpleButton
            text="Save Updates"
            width="10em"
            onClick = {handleUpload}
            
          /> */}
          <button className="purple-button" onClick = {handleUpload}> Save Updates</button>
        </div>
        <div className="user-settings-first-comp-profile-image-and-name-and-edit">
          <div className="user-settings-first-comp-profile-image-and-name">
            <div className="user-settings-first-comp-image-overlay"></div>
            <div className="user-settings-first-comp-profile-name">
              {/* <CardTitle name={CardName} /> */}
              <CardTitle name={userData.name||userData.firstName||CardName} />
            </div>
          </div>
          <div className="user-settings-first-comp-profile-edit">
            <IconButton onClick={handleProfileEdit}>
             
                <img src={profileEdit} />
              
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}
