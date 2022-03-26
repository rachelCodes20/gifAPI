const dotenv = require('dotenv');
import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';
import GifContainer  from './GifContainer';
import { GiphyFetch } from '@giphy/js-fetch-api';
const axios = require('axios');
const giphy = new GiphyFetch(process.env.API_KEY);

const App = (props) => {
  const [userInput, setUserInput] = useState('');
  const [gifResults, setGifResults] = useState([]);
  const [error, setError] = useState(false);
  // console.log('key ',process.env.API_KEY)
  useEffect(() => {
    const fetchGifs = async () => {
       const results = await axios(`https://api.giphy.com/v1/gifs/search?=${process.env.API_KEY}&q=cheeseburgers`,{
        params: {
          api_key:process.env.API_KEY
        }
      })
      console.log('gif data ', results)
      setGifResults(results.data.data)
    }
    fetchGifs()
  },[]);

  const render = () => {
    return gifResults.map(gif => {
      return (
        <div className="gifContainer">
          <img src={gif.images.fixed_height.url} />
          </div>
      )
    })
  }

  const handleInput = (e) => {
    setUserInput(e => e.target.value)
  }
  const handleSubmit = () => {
    if(userInput.length === 0){
      console.log(`please insert text`);
      setError(true);
      return;
    }

  apiCall();
  setUserInput('');
  setError(false);
  }

    return (
      <div>
          <h1>Enter Your Gif Search Term</h1>
          <input type="text" value={userInput} onChange={handleInput}/>
          <button>Search</button>
          <GifContainer 
          handleSubmit={handleSubmit}/>
          <div className="gifContainer">{render()}</div>
      </div>

    )
  }
  export default App;