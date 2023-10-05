import React from 'react';
import Navbar from '../components/Navbar';

export default function Connections() {
  return (
    <div className='w-full h-screen bg-black text-white'>
        <div><Navbar/></div>
        <div>
            <span>Connections</span>
            <p>view all users you follow all around and manage them.you can unfollow if you want.</p>
        </div>
    </div>
  )
}
