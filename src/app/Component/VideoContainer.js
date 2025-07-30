"use client";
import React, { useEffect, useState } from "react";
import { VIDEO_URL } from ".././Utils/Constant";
import Videocard from "./Videocard";

const VideoContainer = () => {
  const [youtubedata, setYoutubeData] = useState([]);

  const MyAPIKey = async () => {
    const data = await fetch(VIDEO_URL);
    const res = await data.json();
    setYoutubeData(res.items);
  };

  useEffect(() => {
    MyAPIKey();
  }, []);

  return (
    <div>
      <Videocard card={youtubedata[0]} />
    </div>
  );
};

export default VideoContainer;
