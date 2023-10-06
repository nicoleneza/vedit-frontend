import React from "react";
import Post from "./App/post";
import Feed from "./App/feed";
import Connections from "./App/connections";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Connections from "./App/connections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Switch> */}
        <Route exact path="/" element={<Post />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/connections" element={<Connections />} />
        {/* </Switch> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
