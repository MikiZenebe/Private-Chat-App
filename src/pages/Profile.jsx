import React, { useState, useEffect } from "react";
import { BsFillCameraFill, BsTrashFill } from "react-icons/bs";
import "./Profile.scss";

import { storage, db, auth } from "../firebase";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import Default from "../assets/default.png";
import { useNavigate } from "react-router-dom";

function Profile() {
  //Create image data state
  const [img, setImg] = useState("");
  const [user, setUser] = useState();

  const navigate = useNavigate("");
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
          //Replace the profile Image
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          //Update or add the avatar to the doc
          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          console.log(url);
          setImg();
        } catch (error) {
          console.log(error.message);
        }
      };
      uploadImg();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);

  //Delete the profile image with delete icon
  const deleteImage = async () => {
    try {
      const confirm = window.confirm("Delete the Profile Picture?");
      if (confirm) {
        await deleteObject(ref(storage, user.avatarPath));
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          avatar: "",
          avatarPath: "",
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return user ? (
    <div className="profile-container">
      <div className="img-container">
        <img src={user.avatar || Default} alt="" />
        <div className="overlay">
          <div>
            <label htmlFor="photo">
              <BsFillCameraFill fill="orange" cursor="pointer" />
            </label>
            {user.avatar ? (
              <BsTrashFill fill="red" onClick={deleteImage} />
            ) : null}
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
