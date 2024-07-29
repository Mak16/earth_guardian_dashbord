import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { auth, db, storage } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import logo from "../assets/earth_Guardian_logo.png";

export default function Header() {
  const [userData, setUserData] = useState(null);
  const [newPhoto, setNewPhoto] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, []);

  const handlePhotoUpload = async () => {
    const user = auth.currentUser;
    if (user && newPhoto) {
      const photoRef = ref(storage, `users/${user.uid}/profile.jpg`);
      await uploadBytes(photoRef, newPhoto);
      const photoURL = await getDownloadURL(photoRef);
      await updateDoc(doc(db, "users", user.uid), {
        photoURL,
      });
      setUserData({ ...userData, photoURL });
    }
  };

  return (
    <div className="w-full flex flex-row items-center shadow-md justify-between px-10 py-2">
      <div className="">
        <img className="max-w-28 py-2" src={logo} alt="Logo" />
      </div>
      <div className="flex flex-row space-x-10 justify-between">
        <div className="relative mx-4 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 border rounded-lg"
          />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-3">
            <Icon icon="ic:sharp-search" className="text-gray-500" />
          </div>
        </div>
        <div className="flex items-center">
          <Icon
            icon="mdi:bell-outline"
            className="text-xl w-10 h-10 cursor-pointer"
          />
        </div>
        {userData && (
          <div className="flex items-center flex-row space-x-2">
            <div className="flex flex-col items-end">
              <p className="font-bold text-xl text-right font-Montserrat">
                {userData.nom} {userData.postnom}
              </p>
              <p className="text-sm text-right font-Montserrat">{userData.role}</p>
            </div>
            <input
              type="file"
              onChange={(e) => setNewPhoto(e.target.files[0])}
              className="hidden"
              id="profile-photo"
            />
            <label htmlFor="profile-photo">
              <img
                src={userData.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-12 h-12 rounded-full border border-gray-300 cursor-pointer"
              />
            </label>
            <button onClick={handlePhotoUpload} className="hidden" id="upload-button">Upload</button>
          </div>
        )}
      </div>
    </div>
  );
}
