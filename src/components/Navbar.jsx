import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar() {
  const [clicked, setClicked] = useState(null);
  const [feedClick, setFeedClick] = useState(false);
  const [postClick, setPostClick] = useState(false);
  const [connClick, setConnClick] = useState(false);

  const FeedHandler = () => {
    setFeedClick(true);
    setConnClick(false);
    setPostClick(false);
  };

  return (
    <div className="w-full flex justify-between items-center px-10 py-3">
      <Link to={"/"} className="text-xl">
        Vedit
      </Link>

      <div className="flex items-center text-xl">
        <Link
          to={"/"}
          className={`font-bold px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 ${
            clicked === true ? "text-purple-700" : ""
          }`}
          onClick={FeedHandler}
        >
          Feed
        </Link>
        <Link
          to={"/dash"}
          className={`font-bold px-3 py-2  rounded-lg  ${
            clicked === true ? "text-purple-700" : ""
          }`}
        >
          Post
        </Link>
        <Link
          to={"/projects"}
          className={`font-bold px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 ${
            clicked === true ? "text-purple-700" : ""
          }`}
        >
          Connections
        </Link>
      </div>

      <div className="flex items-center cursor-pointer">
        <IoIosNotificationsOutline
          style={{ width: "40px", height: "40px", color: "white" }}
        />
        <Link>
          <img src="./../public/" alt="" />
        </Link>
      </div>
    </div>
  );
}
