import React, { useState, useEffect } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import "./Profile.scss";

import { storage, db, auth } from "../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import Miki from "../assets/miki.jpg";

function Profile() {
  //Create image data state
  const [img, setImg] = useState("");

  const [user, setUser] = useState();

  //Create the ref for the image
  useEffect(() => {
    //Grab the user which upload the image
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });

    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          //Update or add the avatar to the doc
          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          console.log(url);
          setImg("");
        } catch (error) {
          console.log(error.message);
        }
      };
      uploadImg();
    }
  }, [img]);

  return user ? (
    <div className="profile-container">
      <div className="img-container">
        <img src={user.avatar || Miki} alt="" />
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
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <hr />
        <small>
          Joined on: <span>{user.createdAt.toDate().toDateString()}</span>
        </small>
      </div>
    </div>
  ) : null;
}

export default Profile;
