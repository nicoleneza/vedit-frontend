import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
// import { BrowserRouter,Routes, Route } from 'react-router-dom';

const root = document.getElementById("root");
const main = createRoot(root);
main.render(<App />);
