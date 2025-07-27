"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toogleMenu = () => {
    dispatch(toogleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 my-2 shadow-lg">
      <div className="flex col-span-1 gap-x-2">
        <img
          onClick={() => toogleMenu()}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADy8vKDg4M3Nzc+Pj6Ghob19fU5OTkzMzPS0tIVFRW1tbVzc3Ph4eGLi4t7e3tNTU27u7tmZmacnJxbW1vBwcFFRUVUVFSioqLp6emsrKxhYWGSkpLg4ODHx8fU98TiAAAB5UlEQVR4nO3da1IiMRQGUGZoukFAFLV96/53qU3N/JvSVEJ505lzVnC/SkI6VB6LBQAAAAAAAAAAAMBPG37XaDhTustD96tW3eGyPOBVdIpvXBXmG+ptv7+6ss66iq4/waok4Gt09Ule8wMO0bUnyu+nz9GlJ3rOTvgSXXqil+yE6+jSE62zE26iS0+0yU54HV16ouvshMvo0hMtsxNeRJee6CI74Sw+aco+aubRiAVNOI85P3++PzlG1/+tY1nAxeLpJjrCl26eSgN+Gna3/bJG/e3uXH9kAAAAAAAAAAD8lPf+btXVaHXXv58h33EbvWXmS9viDUO1HygpPlKyj64/QVHEXXT1SXYFCaNrT5QfcIwuPdGYnXAOo3CSPxLnsQm6ZBt0++ct7qNLT3SfnXAu43CfnbD939L258P/4JtmFiMxfxSeNL+2+Oyola8Pi7roH+P+YR29nP+n9cO+4FcUAAAAAAAAACDEMD5Wevfl43iOuy+bv7+0/jtoC7fUNH+PcPt3Qdf/Bsuka70JSxrxEF16okN2wvb36rd/3qL9MzPtvzMzh/l+kj/nt//eU/tvds3jPaT8t5AmQ/0TxqZ0jVj7qZnCEzOTt77eMyXb/q084Enb75ACAAAAAAAAAAAApPsAtcs1XnQo7SwAAAAASUVORK5CYII="
          className="h-8 cursor-pointer"
          alt="Menu-Icon"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcr37Yi0PmdsfMgAeIEzr2GrSPtYIZeKluAg__2Ef1uLc-4BT_z687dJiT3sDvX0XylLM&usqp=CAU"
          alt="Youtube_Image"
          className="h-8"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="border border-gray-400 min-w-7/12  rounded-l-full p-1"
          placeholder="Search..."
        />
        <button className="border border-gray-400 rounded-r-full p-1 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHtqsQizwi4syQ1AyhMVid6SO78Nfdd-meQ&s"
          alt="userMenu"
        />
      </div>
    </div>
  );
};

export default Head;
