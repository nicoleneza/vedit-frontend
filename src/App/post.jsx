import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import sanityClient from "../utils/client";
import client from "../utils/client";
import VideoThumbnail from "react-video-thumbnail";
import { MdSend } from "react-icons/md";
import "./feed.css";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      if (file) {
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
          description,
          // slug: "cute",
        });
        console.log(res);
        navigate("/feed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black min-h-screen w-full text-white">
      <Navbar />
      <div className="mx-auto max-w-[60%]">
        <div>
          <h1 className="text-lg">Post</h1>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <h1>Upload video</h1>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-950 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-900 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      setFile(e.target.files[0]);
                    }
                  }}
                />
              </label>
            </div>
            <div className="mt-5">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block p-2.5 w-full text-sm text-white bg-gray-950 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="mt-5">
              <button
                className="p-2 gap-3 w-fit text-white items-center justify-center float-right rounded-md bg-purple-600 flex flex-row "
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
            </div>
          </div>
          <div>
            <h1>Preview</h1>
            {file && (
              <video
                preload="metadata"
                src={URL.createObjectURL(file)}
                height={1920 - 850}
                width={1080 - 850}
                controls
                className="aspect-[9/16] rounded-lg"
              ></video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
