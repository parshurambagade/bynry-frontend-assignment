import React from "react";
import { useParams } from "react-router-dom";
import profilesData from "../assets/data.json";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Profile = () => {
  const { id } = useParams();
  const profile = profilesData.data[id - 1];
  const { name, profileImage, role, briefBio, additionalInfo } = profile;
  return (
    <div className="flex flex-col w-full max-w-4xl rounded-lg border border-gray-200 bg-white shadow-sm  md:flex-row md:items-start md:gap-8 lg:p-6">
      <div className="flex-shrink-0 p-6 md:p-0">
        <div className="h-32 w-32">
          <img alt={name} src={profileImage} />
        </div>
      </div>
      <div className="flex-1 space-y-4 p-6 md:p-0">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500 ">{role}</p>
        </div>
        <div className="prose max-w-none dark:prose-invert">
          <p>{briefBio}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">CONTACT</h3>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="h-5 w-5 text-gray-500 " />
              <span>cody@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="h-5 w-5 text-gray-500 " />
              <span>+1 (555) 555-5555</span>
            </div>
            {/* <div className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                 
                </div> */}
          </div>

          {Object.keys(additionalInfo).map((key, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-sm font-medium">{key.toUpperCase()}</h3>
              <div className="flex flex-wrap gap-2">
                {additionalInfo[key]?.map((item, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
