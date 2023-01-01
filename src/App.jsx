const dotenv = require("dotenv");
import React, { useState, useEffect } from "react";
import GifContainer from "./GifContainer";
import Carousel from "./Carousel";
const axios = require("axios");

const App = (props) => {
  const [userInput, setUserInput] = useState("");
  const [gifResults, setGifResults] = useState([]);
  const [error, setError] = useState(false);
  const notEnoughResults = () => {
    return <h1>Your search has too few results </h1>;
  };

  const fetchEffect = (props) => {
    const fetchGifs = async () => {
      const results = await axios(
        `https://api.giphy.com/v1/gifs/search?=${process.env.API_KEY}&q=${userInput}`,
        {
          params: {
            api_key: process.env.API_KEY,
            limit: 3,
          },
        }
      );
      if (results.data.data.length < 3) {
        setGifResults([`Not enough data`]);
        notEnoughResults();
      } else {
        setGifResults(results.data.data);
      }
    };
    fetchGifs();
  };
  useEffect(() => {
    fetchEffect();
  }, []);

  const render = () => {
    return gifResults.map((gif) => {
      return (
        <div>
          <div className="gifContainer">
            <img src={gif.images.fixed_height.url} />
          </div>
        </div>
      );
    });
  };

  const handleInput = (e) => {
    setUserInput(e.target.value);
    if (userInput) {
      fetchEffect();
    }
  };
  const handleSubmit = () => {
    if (userInput.length === 0) {
      setError(true);
    } else {
      fetchEffect();
      setError(false);
    }
    setUserInput("");
  };
  return (
    <div>
      <h1>Let's Get Some Gifs!</h1>
      <GifContainer
        userInput={userInput}
        handleInput={handleInput}
        gifResults={gifResults}
        notEnoughResults={notEnoughResults}
        render={render}
      />
      <Carousel />
    </div>
  );
};
export default App;
