import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import sanityClient from "../utils/client";
import client from "../utils/client";
import VideoThumbnail from "react-video-thumbnail";
import { MdSend } from "react-icons/md";
import "./feed.css";

export default function Post() {
  const [file, setFile] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = async () => {
    try {
      const document = await client.assets.upload("file", file, {});
      console.log(document);
      const res = await client.create({
        _type: "song",
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: document._id,
          },
        },
        description: "title",
        // slug: "cute",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black h-screen ">
      <div>
        <Navbar />
        <div className="flex flex-row gap-x-5 justify-center mt-20">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <button
            className="p-2 gap-3 w-36 text-white items-center justify-center float-right mt-16  rounded-md bg-purple-600 text-xl flex flex-row "
            onClick={handleSubmit}
          >
            Post
            <MdSend
              style={{
                color: "white",
                backgroundcolor: "white",
                height: "30px",
              }}
            />
          </button>
          {file && (
            <video
              controls
              width="100"
              height="1000"
              preload="auto"
              src={URL.createObjectURL(file)}
            ></video>
          )}
        </div>
      </div>
    </div>
  );
}
