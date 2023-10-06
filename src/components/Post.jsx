// import VideoThumbnail from "react-video-thumbnail";
const Post = ({ slug, _id, description, video }) => {
  console.log(video);
  return (
    <div id="item" className="max-h-[23rem] py-2">
      <h1 className="font-semibold text-lg mb-2">{description}</h1>
      <video
        preload="metadata"
        src={video.asset.url}
        height={1920 - 850}
        width={1080 - 850}
        controls
        className="aspect-[9/16] rounded-lg"
      ></video>
    </div>
  );
};

export default Post;
