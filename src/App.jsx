const dotenv = require('dotenv');
import React, { useState, useEffect } from 'react';
import GifContainer  from './GifContainer';
const axios = require('axios');

const App = (props) => {
  const [userInput, setUserInput] = useState('');
  const [gifResults, setGifResults] = useState([]); 
  const [error, setError] = useState(false)
  const notEnoughResults = () => {
    return (
      <h1>Your search has too few results = ( </h1>
    )
  }
 
  const fetchEffect = (props) => {
    if(!userInput){
        setUserInput(`roses`);
        handleSubmit()
      }
    const fetchGifs = async () => {
      const results = await axios(`https://api.giphy.com/v1/gifs/search?=${process.env.API_KEY}&q=${userInput}`,{
       params: {
         api_key:process.env.API_KEY,
         limit: 3
       }
     })
     if(results.data.data.length < 3){
      setGifResults([`Not enough data`])
      notEnoughResults();
     }else{
         setGifResults(results.data.data)
     }
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
      fetchEffect()
      setError(false);
    }
    setUserInput('');
  }
    return (
      <div className="main">
         <h1>Enter Your Gif Search Term</h1>
         <GifContainer 
         userInput={props.userInput}
         handleInput={handleInput}
         gifResults={gifResults}
         notEnoughResults={notEnoughResults}
         render={render}
         />
      </div>
    )
  }
  export default App;