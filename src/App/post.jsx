import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Navbar from "../components/Navbar";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import VideoThumbnail from "react-video-thumbnail";
import { MdSend } from "react-icons/md"
import "./feed.css"


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
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
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'song'] {
          slug,
          _id,
          description,
          video {
            asset -> {
              url
            }
          }
        }`
      )
      .then((data) => {
        console.log("data: ", data);
        setVideo(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-black h-screen ">
      <div>
        <Navbar />
        <div className="flex flex-row gap-x-5 justify-center mt-20">
        <div className=" flex flex-col w-1/2">
          <span className="text-white text-bold text-3xl">Posts</span>
          {video && (
            // <video>controls width="50" src={URL.createObjectURL(video)}</video>
            <></>
          )}
        </div>
        <div className="flex flex-col float-right mr-20">
        <button  className=" text-white font-bold text-lg  float-right rounded-lg bg-purple-600  w-36 h-12"
          >
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          className="  hidden " placeholder="upload" 
          // className=" text-white font-bold text-lg  float-right mr-48 rounded-lg bg-purple-600  w-36 h-12"
          // onClick={setFile}
        />
        </button>
        <button className="p-2 gap-3 w-36 text-white items-center justify-center float-right mt-16  rounded-md bg-purple-600 text-xl flex flex-row " onClick={handleSubmit}>
          Post
          <MdSend style={{color:"white",backgroundcolor:"white",height:"30px",height:"30px"}}/>
        </button>
        </div>
      </div>
      {file &&  <video
        controls
        
        width="100"
        height="1000"
        preload="auto"
        src={URL.createObjectURL(file)}
      ></video>}
     
      <div className="text-white">
        {video?.map((song) => (
          <div key={song._id} className="">
            {/* <span>{song.title}</span> */}
            <p>{song.description}</p>
            {video && (
              <>
                <video
                  controls
                  width="100"
                  height="100"
                  preload="auto"
                  src={song.video.asset.url}
                  
                ></video>
                <div>

                </div>
              </>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
