import React, { useState, useEffect } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import "./Profile.scss";

import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

import Miki from "../assets/miki.jpg";

function Profile() {
  //Create image data state
  const [img, setImg] = useState("");

  //Create the ref for the image
  useEffect(() => {
    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );

        const snap = await uploadBytes(imgRef, img);
        console.log(snap.ref.fullPath);
      };
      uploadImg();
    }
  });

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
              onChange={(e) => setImg(e.target.files[0])}
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
