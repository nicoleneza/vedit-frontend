import react , { useState }from 'react';
import client from '../client';
// import "./..y/schemas/index.js"

export default function Post(){
    // client.assets
    // .upload('file', videoFile)
    // .then((response) => {
    //   videoAsset.asset._ref = response._id;
    //   return client.create(videoAsset);
    // })
    // .then((response) => {
    //   video.videoURL = response.url;
    //   return client.assets.upload('image', thumbnailFile);
    // })
    // .then((response) => {
    //   video.thumbnailURL = response.url;
    //   return client.create(video);
    // })
    // .then((response) => {
    //   console.log('Video added successfully!', response);
    // });
    return(
      <div>
        {songs.map((song) => new Array()(
          <div key={song._id}>
            <span>{song.title}</span>
            <p>{song.description}</p>
            <video src={song.video.asset.url} poster={song.thumbnail.asset.url} controls />
          </div>
        ))}
      </div>
    )}
