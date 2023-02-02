import React from "react";
import "../../styles/profile.scss";
import GoogleButton from "react-google-button";
import { googlesign } from "../../firebase/google";
const Profile = () => {
  return (
    <div className="profile">
      <div>
        <div className="email">
          <label htmlFor="">email</label>
          <input type="email" placeholder="email@.gmail.com" />
        </div>
        <div className="pass">
          <label htmlFor="">password</label>
          <input type="password" />
        </div>
      </div>

      <GoogleButton
        onClick={() => {
          googlesign();
        }}
      />
    </div>
  );
};

export default Profile;
