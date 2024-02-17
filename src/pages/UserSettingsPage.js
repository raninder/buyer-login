import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/footer/Footer";
import UserSettingsFirstComp from "../components/usersettingscomp/usersettingsfirstcomp/UserSettingsFirstComp";
import UserSettingsSecondComp from "../components/usersettingscomp/usersettingssecondcomp/UserSettingsSecondComp";
import UserSettingsThirdComp from "../components/usersettingscomp/usersettingsthirdcomp/UserSettingsThirdComp";
import UserSettingsFourthComp from "../components/usersettingscomp/usersettingsfourthcomp/UserSettingsFourthComp";
import UserSettingsFifthComp from "../components/usersettingscomp/usersettingsfifthcomp/UserSettingsFifthComp";
import UserSettingsSixthComp from "../components/usersettingscomp/usersettingssixthcomp/UserSettingsSixthComp";
import UserSettingsRightFirstComp from "../components/usersettingscomp/usersettingsrightfirstcomp/UserSettingsRightFirstComp";
import UserSettingsRightSecondComp from "../components/usersettingscomp/usersettingsrightsecondcomp/UserSettingsRightSecondComp";
import Sidebar from "../components/Sidebar";

export default function UserSettingsPage() {
  return (
    <div style={{background:"#F5F5F5"}}>
      <Navbar />
      <div className="user-settings-container" style={{ display: "flex" }} >
        <div className="user-settings-left-container" style={{width:"19vw"}}>
          <Sidebar />
        </div>
        <div className="user-settings-middle-container">
          <UserSettingsFirstComp />
          <UserSettingsSecondComp />
          <UserSettingsThirdComp />
          <UserSettingsFourthComp />
          <UserSettingsFifthComp />
          <UserSettingsSixthComp />
        </div>
        <div className="user-settings-right-container">
          <UserSettingsRightFirstComp/>
          <UserSettingsRightSecondComp/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
