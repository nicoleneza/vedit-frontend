import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import { BrowserRouter,Routes, Route } from 'react-router-dom';

const root = document.getElementById("root");
const main = createRoot(root);
main.render(
  <>
    <App />
  </>
);

// ReactDOM.render(
//   // <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//          <App /> }>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   // </React.StrictMode>
//   ,
//   document.getElementById('root')
// );
