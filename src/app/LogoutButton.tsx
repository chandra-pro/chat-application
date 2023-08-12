// import React from "react";
"use client";

const LogoutButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Sign out");
        }}
        className="bg-blue-500 hover:bg-blue-800 text-white-300 font-bold py-2 px-4 my-3 mx-6"
      >
        Sign Out
      </button>
    </div>
  );
};

export default LogoutButton;
