import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App  />
  </BrowserRouter>,
  root
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