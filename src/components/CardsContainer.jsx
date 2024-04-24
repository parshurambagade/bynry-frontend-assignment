import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { getAllUsers } from "../api/firestore-apis";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const [profilesData, setProfilesData] = useState({});
  
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    setProfilesData(users);
  }, []);
 
  if (Object.keys(profilesData).length === 0) return null; // Check if object is empty

  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 mt-8">
      {
        Object.keys(profilesData).map((id) => (
          <ProfileCard key={id} profile={profilesData[id]} id={id} />
        ))
      }
    </div>
  );
};

export default CardsContainer;
