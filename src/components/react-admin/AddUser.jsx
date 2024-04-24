import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function AddUser() {
  const [userData, setUserData] = useState({
    name: "",
    profileImage: "",
    role: "",
    location: { latitude: "", longitude: "" },
    briefBio: "",
    contactInfo: { email: "", phone: "" },
    additionalInfo: { skills: "", languages: "", interests: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Handling nested object updates
    if (name.includes(".")) {
      const levels = name.split(".");
      setUserData((prev) => ({
        ...prev,
        [levels[0]]: {
          ...prev[levels[0]],
          [levels[1]]: value,
        },
      }));
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), userData);
      console.log("Document written with ID: ", docRef.id);
      // Optionally reset form or give user feedback
      setUserData({
        name: "",
        profileImage: "",
        role: "",
        location: { latitude: "", longitude: "" },
        briefBio: "",
        contactInfo: { email: "", phone: "" },
        additionalInfo: { skills: "", languages: "", interests: "" },
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (<>
  
    <div className="max-w-md mx-auto mt-10">
      <div
  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto"
  data-v0-t="card"
>
  <div className="flex flex-col space-y-1.5 p-6">
    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
      Add User
    </h3>
    <p className="text-sm text-muted-foreground">
      Fill out the form to add a new user to the system.
    </p>
  </div>
  <div className="p-6 space-y-4">
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="name"
        placeholder="Enter the user's name"
        type="text"
    name="name"
   value={userData.name}
    onChange={handleChange}
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="profileImage"
        
      >
        Profile Image
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="profileImage"
        placeholder="Enter the image URL"
        type="url"
          name="profileImage"
          value={userData.profileImage}
          onChange={handleChange}
      />
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="role"
      >
        Role
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="role"
        placeholder="Enter the user's role"
        type="text"
          name="role"
          value={userData.role}
          onChange={handleChange}
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="latitude"
        >
          Latitude
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="latitude"
          placeholder="Enter the latitude"
          type="number"
          name="location.latitude"
          value={userData.location.latitude}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="longitude"
        >
          Longitude
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="longitude"
          placeholder="Enter the longitude"
          type="number"
          name="location.longitude"
          value={userData.location.longitude}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="briefBio"
      >
        Brief Bio
      </label>
      <textarea
        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="briefBio"
        placeholder="Enter a brief bio"
        defaultValue={""}
        name="briefBio"
          value={userData.briefBio}
          onChange={handleChange}
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="email"
          placeholder="Enter the email"
          type="email"
          name="contactInfo.email"
          value={userData.contactInfo.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="phone"
          placeholder="Enter the phone number"
          type="text"
          name="contactInfo.phone"
          value={userData.contactInfo.phone}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="skills"
        >
          Skills
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="skills"
          placeholder="Enter the user's skills"
          type="text"
          name="additionalInfo.skills"
          value={userData.additionalInfo.skills}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="languages"
        >
          Languages
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="languages"
          placeholder="Enter the user's languages"
          type="text"
          name="additionalInfo.languages"
          value={userData.additionalInfo.languages}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="interests"
      >
        Interests
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="interests"
        placeholder="Enter the user's interests"
        type="text"
          name="additionalInfo.interests"
          value={userData.additionalInfo.interests}
          onChange={handleChange}
      />
    </div>
  </div>
  <div className="flex items-center p-6">
    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-800 text-gray-200 hover:bg-slate-800/90 h-10 px-4 py-2 ml-auto"
      type="submit"
    >
      Add User
    </button>
  </div>
</div>

    </div>
  </>);
}

export default AddUser;
