import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function Connections() {
    const [followers,setFollowers] = useState([])
    const [data,setData] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('/api/data', data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div className='w-full h-screen bg-black text-white'>
        <div><Navbar/></div>
        <div className='mt-20 ml-52'>
            <span className='text-3xl'>Connections</span>
            <p className='text-lg'>view all users you follow all around and manage them.you can unfollow if you want.</p>
        </div>
        <div>
  {followers.map((user) => {
    return (
      <div key={user.id} className=''>
        <img src={user.profile} alt='my picture' />
        <span>{user.username}</span>
        <span>Followed you</span>
      </div>
    );
  })}
</div>

    </div>
  )
}
