import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Navbar from "../components/Navbar";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function Post() {
  const [file, setfile] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = async () => {
    try {
      const document = await client.assets.upload("file", file);
      const res = await client.create({
        _type: "song",
        image: {
          _type: "video",
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
          image {
            asset -> {
              _id
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
        <button 
          type="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
          className=" text-white font-bold text-lg  float-right mr-48 rounded-lg bg-purple-600  w-36 h-12"
      >Upload</button>
        <button className="p-2 bg-gray-50" onClick={handleSubmit}>
          submit
        </button>
      </div>
      <div className="text-white">
        {video?.map((song) => (
          <div key={song._id}>
            {/* <span>{song.title}</span> */}
            <p>{song.description}</p>
            {video && (
              <>
                {/* <img src={urlFor(song.image)} height={100} width={100} alt="" /> */}
                <video>
                  {/* controls width="200" src={URL.createObjectURL(video)} */}
                </video>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
