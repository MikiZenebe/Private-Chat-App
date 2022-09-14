import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import "./Profile.scss";

import Miki from "../assets/miki.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <div className="img-container">
        <img src={Miki} alt="" />
        <div className="overlay">
          <div>
            <label htmlFor="photo">
              <BsFillCameraFill fill="#F09819" cursor="pointer" />
            </label>
            <input
              type="file"
              accept="/*"
              style={{ display: "none" }}
              id="photo"
            />
          </div>
        </div>
      </div>

      <div className="text-container">
        <h3>User name</h3>
        <p>User email</p>
        <hr />
        <small>Joined on: ...</small>
      </div>
    </div>
  );
}

export default Profile;
