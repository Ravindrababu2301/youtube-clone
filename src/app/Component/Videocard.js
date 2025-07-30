import React from "react";

const Videocard = ({ card }) => {
  console.log(card);
  const { snippet, statistics } = card;
  const { thumbails, title, channelTitle } = snippet;
  return (
    <div>
      <img src={thumbails.high} />
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Videocard;
