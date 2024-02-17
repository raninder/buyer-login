import React from "react";
import "./style.css";
import profileEdit from "../../../assets/images/user-settings-profile-edit.svg";
import { IconButton, TextField } from "@mui/material";
import CardTitle from "../shared/CardTitle";
import NormalTitle from "../shared/NormalTitle";
import VerifiedFlag from "../shared/VerifiedFlag";
import PurpleButton from "../shared/PurpleButton";
import formData from "./profileFormData"

const CardName = "Judy Garcia";

const InputField = ({ placeholder }) => {
  return (
    <TextField
      sx={{
        width: "100%",
        height: "89%",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#D9CDCD",
            borderWidth: "2px",
            borderRadius: "10px",
          },
          "&:hover fieldset": {
            borderColor: "#7731E4",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#7731E4",
          },
        },
      }}
      value={placeholder}
    />
  );
};

const FormItem = ({
  titleName,
  disableFlag,
  flagStatus,
  placeholder,
  width,
}) => {
  return (
    <div
      className="user-settings-first-comp-profile-form-item"
      style={{ width: width ? width : "auto" }}
    >
      <div className="user-settings-first-comp-profile-form-title-line">
        <NormalTitle name={titleName} />
        {!disableFlag && <VerifiedFlag status={flagStatus} />}
      </div>
      <InputField placeholder={placeholder} />
    </div>
  );
};



const ProfileForm = ({ data }) => {
  return (
    <div className="user-settings-first-comp-profile-form">
      {data.map((item, index) => (
        <FormItem
          key={index}
          titleName={item.titleName}
          flagStatus={item.flagStatus}
          placeholder={item.placeholder}
          width={item.width}
          disableFlag={item.disableFlag}
        />
      ))}
    </div>
  );
};

const EmailTip = () => {
  return (
    <div className="user-settings-first-comp-email-tip">
      <span>
        <span> Don't want any emails? </span>
        <a style={{ color: "#7731E4" }}>Unsubscribe.</a>{" "}
      </span>
    </div>
  );
};

export default function UserSettingsFirstComp() {
  return (
    <>
      <div className="user-settings-first-comp-container">
        <div className="user-settings-first-comp-upper-rectangle"></div>
        <div className="user-settings-first-comp-profile-name">
          <CardTitle name={CardName} />
        </div>
        <ProfileForm data={formData} />
        <EmailTip />
        <PurpleButton
          text="Save Updates"
          width="12em"
          style={{ position: "absolute", right: "3.5%", bottom: "5%" }}
        />
        <div className="user-settings-first-comp-image-overlay"></div>
        <div className="user-settings-first-comp-profile-edit">
          <IconButton>
            <img src={profileEdit} />
          </IconButton>
        </div>
      </div>
    </>
  );
}
