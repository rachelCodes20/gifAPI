const dotenv = require("dotenv");
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout.js";
import ClipsGiphPage from "./ClipsGiphPage.jsx";
import Home from "./Home";

const App = (props) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
       <Route path="clipsGiphPage" element={<ClipsGiphPage />} />
      <Route index element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};
export default App;
