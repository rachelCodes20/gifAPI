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
  // const { data: gifs } = await giphy.search('dogs', { sort: 'relevant', lang: 'es', limit: 10, type: 'stickers' })
  console.log('key ',process.env.API_KEY)
  useEffect(() => {
    const fetchGifs = async () => {
       const results = await axios(`https://api.giphy.com/v1/gifs/search?=${process.env.API_KEY}&q=cheeseburgers`,{
        params: {
          api_key:process.env.API_KEY
        }
      })
      console.log('gif data ', results)
    }
    fetchGifs()
  });
  const handleInput = (e) => {
    setUserInput(e => e.target.value)
  }
  const handleSubmit = () => {
    if(userInput.length === 0){
      console.log(`please insert text`);
      setError(true);
      return;
    }
    // const apiCall = async () => {
    //   const res = await giphy.animate(userInput, {limit: 20})
    //   console.log(res)
    //   setGifResults(res.data);
    // }

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
      </div>

    )
  }
  export default App;