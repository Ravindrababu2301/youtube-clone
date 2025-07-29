import React from "react";
import TopbuttonList from "./TopbuttonList";

const buttonList = [
  "All",
  "Sport",
  "Live",
  "Gaming",
  "Songs",
  "Cricket",
  "Tamil",
];

const ButtonList = () => {
  return (
    <div>
      {buttonList.map((Li, index) => (
        <TopbuttonList key={index} text={Li} />
      ))}
    </div>
  );
};

export default ButtonList;
