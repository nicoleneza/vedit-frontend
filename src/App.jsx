import React from "react";
import "./App.css";
import Post from "./App/post";
import Feed from "./App/feed";
// import Connections from "./App/connections";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connections from "./App/connections";

function App() {
  return (
    <>
    {/* // <div className="App ">
    //   <Post/>
    //   <Feed/>
    // </div> */} 
    
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/connnections" element={<Connections />} />
      </Routes>
      </>

  
  );
}

export default App;
