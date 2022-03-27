const dotenv = require('dotenv');
import React, { useState, useEffect } from 'react';
import GifContainer  from './GifContainer';
import { GiphyFetch } from '@giphy/js-fetch-api';
const axios = require('axios');
const giphy = new GiphyFetch(process.env.API_KEY);

const App = (props) => {
  const [userInput, setUserInput] = useState('');
  const [gifResults, setGifResults] = useState([]);
  const [error, setError] = useState(false);
  const fetchEffect = () => {
    if(!userInput){
        setUserInput(`roses`);
        handleSubmit()
      }
    const fetchGifs = async () => {
      const results = await axios(`https://api.giphy.com/v1/gifs/search?=${process.env.API_KEY}&q=${userInput}`,{
       params: {
         api_key:process.env.API_KEY
       }
     })
     setGifResults(results.data.data)
   }
   fetchGifs()
 }
    useEffect(() => {
      fetchEffect()
  },[])

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
    // console.log('e', e.target.value)
    setUserInput(e.target.value)
    if(userInput){
        fetchEffect()
    }
  }
  const handleSubmit = () => {
    if(userInput.length === 0){
      // alert(`please insert text`);
      setError(true);
    }else{
      // console.log('line 46', userInput)
      fetchEffect()
  setError(false);
    }
 setUserInput('');
  }
    return (
      <div className="main">
          <h1>Enter Your Gif Search Term</h1>
          <div>
          <input type="text" className="gifInput" value={userInput} onChange={handleInput}/>
          </div>
          <div className="gifContainer">{render()}</div>
      </div>

    )
  }
  export default App;