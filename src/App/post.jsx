import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Navbar from "../components/Navbar";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import VideoThumbnail from "react-video-thumbnail";
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
        description: "cute",
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
    <div className="bg-black h-screen">
      <div>
        <Navbar />
        <div className="">
          <span>Posts</span>
          {video && (
            // <video>controls width="50" src={URL.createObjectURL(video)}</video>
            <></>
          )}
        </div>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          // className=" text-white font-bold text-lg  float-right mr-48 rounded-lg bg-purple-600  w-36 h-12"
          // onClick={setFile}
        />
        <button className="p-2 bg-gray-50" onClick={handleSubmit}>
          submit
        </button>
      </div>
      {file &&  <video
        controls
        width="100"
        height="100"
        preload="auto"
        src={URL.createObjectURL(file)}
      ></video>}
     
      <div className="text-white">
        {video?.map((song) => (
          <div key={song._id}>
            {/* <span>{song.title}</span> */}
            <p>{song.description}</p>
            {video && (
              <>
                {/* <img src={urlFor(song.image)} height={100} width={100} alt="" /> */}
                {/* <VideoThumbnail
                  videoUrl={song.video.asset.url}
                  thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                  width={1020}
                  height={680}
                />     */}
                <video
                  controls
                  width="100"
                  preload="auto"
                  src={song.video.asset.url}
                ></video>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
