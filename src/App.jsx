const dotenv = require("dotenv");
import React, { useState, useEffect } from "react";
import Layout from "../Layout.js";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
    </Routes>
     
    </BrowserRouter>
  );
};
export default App;
