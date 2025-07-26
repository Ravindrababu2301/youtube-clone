import React from "react";
import Sidebar from "../Component/Sidebar";
import MainContainer from "../Component/MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
