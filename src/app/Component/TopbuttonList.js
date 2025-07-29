import React from "react";

const TopbuttonList = ({ text }) => {
  return (
    <button className="p-1 px-3 m-2 rounded bg-gray-200 cursor-pointer">
      {text}
    </button>
  );
};

export default TopbuttonList;
