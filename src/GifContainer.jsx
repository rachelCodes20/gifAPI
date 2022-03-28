import React from 'react';


  function GifContainer(props) {
    const userInput = props.userInput;
    const handleInput = props.handleInput;
    const gifResults = props.gifResults;
    const notEnoughResults = props.notEnoughResults;
    const render = props.render;
    return (
        <div>
           <div>
          <input type="text" className="gifInput" value={userInput} onChange={handleInput}/>
          </div>
          <div className="gifsContainer">
            {gifResults[0] === `Not enough data` ? notEnoughResults() : render()}
          </div>
        </div>
    )
  }
  export default GifContainer;