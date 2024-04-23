import React from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { logout } from "../../api/auth";
// import { Link } from 'react-router-dom';

//TODO: replace a tag with Link tag

const Header = () => {
  return (
    <div className="bg-slate-800 text-gray-300 flex justify-between items-center mb-4 px-20 black py-4 shadow-md">
      <a href="/" className="font-bold text-2xl">
        GeoProfileViewer
      </a>
      <div className="bg-gray-200 text-slate-800 flex items-center w-1/2 border text-base border-slate-300 rounded-lg px-4 py-2 gap-2">
        <LiaSearchSolid className="text-xl text-slate-400" />
        <input
          type="text"
          name="search"
          placeholder="search user..."
          className="bg-gray-200 w-full  outline-none"
        />
      </div>
      {
        localStorage.getItem("user") 
        ? 
        <button className=" border border-gray-300 transition-all px-4 py-2 rounded-md hover:bg-slate-700  text-sm" onClick={logout}>
        Logout
      </button>
        :
        <a href="/login" className=" border border-gray-300 transition-all px-4 py-2 rounded-md hover:bg-slate-700  text-sm">
        Admin Login
      </a>
      }
      
    </div>
  );
};

export default Header;
