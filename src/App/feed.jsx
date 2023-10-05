import React,{ useState } from 'react'
import Navbar from '../components/Navbar'
import './feed.css'
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { PiShareFatBold }  from "react-icons/pi"


export default function Feed() {
    const [file, setfile] = useState(null);
        const [video, setVideo] = useState(null);
        const [followers,setFollowers] = useState("")
      
        const handleImageChange = (e) => {
          setVideo(URL.createObjectURL(e.target.files[0]));
        };
  return (
    <div className='w-full h-screen bg-black text-white '>
        <Navbar/>
        <div className='flex flex-row mt-20 ml-52  border-l-4 border-purple-700 gap-12'>
        <div className=' w-1/4 flex text-lg font-semibold h-auto flex-col '>
            <span className='flex justify-center'>User you may know</span>
            <div className='flex items-cente justify-center mt-5'> 
             {followers.length > 0 ? (
        <ul>  
          {followers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No followers</p>
      )}
            </div>
        </div>
        <div className='w-1/4 text-white flex flex-row gap-6'>
            <span className='text-3xl'>Feed</span>
            <div>
            <div className="upload-image-preview" style={{ display: video ? 'block' : 'none' }}>
        {video ? (<video src={video} alt="uploaded image" />):(<span className='text-white'>post something</span>)}
      {/* </div> */}
      {/* <label htmlFor="file-input">Upload Image</label> */}
      {/* <input id='file-input' type="file" name="file" onChange={handleImageChange} className='w-3/4' placeholder='UPload the file' /> */}
      <div className='flex flex-col gap-5' style={{ display: video ? 'block' : 'none' }}>
        <AiOutlineHeart style={{ color: "white", width: "30px", height: "30px" }} />
        <FaRegComment style={{ color: "white", width: "30px", height: "30px" }} />
        <PiShareFatBold style={{ color: 'white', width: "30px", height: "30px" }} />
      </div>
    </div>
            </div>
        </div>
        <div className=' floa-left'>
        <button 
          type="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
          className=" text-white font-bold text-lg rounded-lg bg-purple-600  w-36 h-12"
      >Upload</button>
        </div>
        </div>
    // </div>
  )
}
