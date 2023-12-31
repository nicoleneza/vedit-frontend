import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Connections({ setFile }) {
  const [followers, setFollowers] = useState([]);
  const [data, setData] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("/api/data", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-screen bg-black text-white">
      <div>
        <Navbar />
      </div>
      <div className="mt-20 ml-52">
        <span className="text-3xl">Connections</span>
        <p className="text-lg">
          view all users you follow all around and manage them.you can unfollow
          if you want.
        </p>
      </div>
      <div className="container">
        {followers.map((user) => {
          <div key={user.id} className="box bg-black">
            <BsThreeDotsVertical
              style={{ color: "white", width: "30px", height: "30px" }}
            />
            <div className="flex flex-col justify-center w-full">
              <img
                src={user.profile}
                alt="my picture"
                className="rounded-full w-40 h-40"
              />
              <span>{user.username}</span>
              <span>Followed you</span>
            </div>
          </div>;
        })}
      </div>
      <div className=" float-left">
        <button
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          className=" text-white font-bold text-lg rounded-lg bg-purple-600  w-36 h-12"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
