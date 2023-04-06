const dotenv = require("dotenv");
import React, { useState, useEffect } from "react";
// import GifContainer from "./GifContainer";
import Layout from "../Layout.js";
// import Carousel from "./Carousel";
import Home from "./Home";
// const axios = require("axios");
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import happyBalloons from "./Assets/madison-oren-uGP_6CAD-14-unsplash.jpg";
// import doggieBday from "./Assets/delaney-dawson-BXs8SjVelKs-unsplash.jpg";
// import confettiGirl from "./Assets/hugo-ruiz-e2pVrE1PYzs-unsplash.jpg";

// function handleClick() {}

const App = (props) => {
  // const [userInput, setUserInput] = useState("");
  // const [gifResults, setGifResults] = useState([]);
  // const [error, setError] = useState(false);
  // const slides = [
  //   { url: happyBalloons, title: "Happy Ballons" },
  //   { url: doggieBday, title: "Doggy Birthday" },
  //   { url: confettiGirl, title: "Confetti Girl" },
  // ];
  // const notEnoughResults = () => {
  //   return <h1>Your search has too few results </h1>;
  // };

  // const fetchEffect = (props) => {
  //   const fetchGifs = async () => {
  //     const results = await axios(
  //       `https://api.giphy.com/v1/gifs/search?=${process.env.API_KEY}&q=${userInput}`,
  //       {
  //         params: {
  //           api_key: process.env.API_KEY,
  //           limit: 3,
  //         },
  //       }
  //     );
  //     if (results.data.data.length < 3) {
  //       setGifResults([`Not enough data`]);
  //       notEnoughResults();
  //     } else {
  //       setGifResults(results.data.data);
  //     }
  //   };
  //   fetchGifs();
  // };
  // useEffect(() => {
  //   fetchEffect();
  // }, []);

  // const render = () => {
  //   return gifResults.map((gif) => {
  //     return (
  //       <div>
  //         <div className="gifContainer">
  //           <img src={gif.images.fixed_height.url} />
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  // const handleInput = (e) => {
  //   setUserInput(e.target.value);
  //   if (userInput) {
  //     fetchEffect();
  //   }
  // };
  // const handleSubmit = () => {
  //   if (userInput.length === 0) {
  //     setError(true);
  //   } else {
  //     fetchEffect();
  //     setError(false);
  //   }
  //   setUserInput("");
  // };
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
