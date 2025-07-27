import React from "react";

const Sidebar = () => {
  return (
    <div className="shadow p-2 w-48">
      <ul className="border-b-2 border-gray-300">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className="border-b-2 border-gray-300">
        <li>You</li>
        <li>History</li>
      </ul>
      <h1>Explore</h1>
      <ul className="border-b-2 border-gray-300">
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion and Beauty</li>
        <li>Podcasts</li>
      </ul>
      <h1 className="font-bold py-2">More From Youtube</h1>
      <ul className="border-b-2 border-gray-300">
        <li>YouTube Premium</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <ul className="border-b-2 border-gray-300">
        <li>Setting</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
