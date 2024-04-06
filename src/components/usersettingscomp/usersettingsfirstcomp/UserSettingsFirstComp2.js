import React, {useState} from "react";
import "./style.css";
import profileEdit from "../../../assets/images/user-settings-profile-edit.svg";
import { IconButton, TextField } from "@mui/material";
import CardTitle from "../shared/CardTitle";
import NormalTitle from "../shared/NormalTitle";
import VerifiedFlag from "../shared/VerifiedFlag";
import PurpleButton from "../shared/PurpleButton";
import formData from "./profileFormData";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '../../../firebase';
import { onSnapshot, updateDoc,doc, setDoc } from "firebase/firestore"
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
      <InputField placeholder={placeholder} name={name} onChange={onChange}/>
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
  const [inputValue, setInputValue] = useState({ mobile:"",email: "", gender: "", address:"" });
 
  console.log("ph", inputValue.mobile)

  const handleUpload = async() =>{
   
    console.log('current User', auth.currentUser.uid, auth.currentUser.displayName);
    //create a new doc with userid in users collection
    const docRef = doc(db, "users", auth.currentUser.uid)
    setDoc(docRef, { merge: true })

    //update userid document with profile data
    try{
      await updateDoc(doc(db, "users", auth.currentUser.uid),{
        name:auth.currentUser.displayName,
        phone: inputValue.mobile,
        gender: inputValue.gender,
        email: inputValue.email||auth.currentUser.email,
        address: inputValue.address,
        userImg: auth.currentUser.photoURL||null,
      });
      console.log("user record updated successfully")
    } catch(err){
      console.log("something went wrong", err)
      }

  }
  return (
    <>
      <div className="user-settings-first-comp-container">
        <div className="user-settings-first-comp-upper-rectangle"></div>

         <div className="user-settings-first-comp-profile-form">
            {formData.map((item, index) => (
              <FormItem
                key={index}
                name={item.name}
                titleName={item.titleName}
                flagStatus={item.flagStatus}
                placeholder={item.placeholder}
                disableFlag={item.disableFlag}
                emailTip={item.emailTip}
                value={inputValue}
                onChange = {(e) => setInputValue({ ...inputValue, [item.name]: e.target.value })}
              />
            ))}
          
         </div>
        <div className="user-settings-first-comp-save-button">
          <PurpleButton
            text="Save Updates"
            width="10em"
            onClick = {handleUpload}
          />
        </div>
        <div className="user-settings-first-comp-profile-image-and-name-and-edit">
          <div className="user-settings-first-comp-profile-image-and-name">
            <div className="user-settings-first-comp-image-overlay"></div>
            <div className="user-settings-first-comp-profile-name">
              <CardTitle name={CardName} />
            </div>
          </div>
          <div className="user-settings-first-comp-profile-edit">
            <IconButton>
              <img src={profileEdit} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}
