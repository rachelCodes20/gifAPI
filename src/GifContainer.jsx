import React from 'react';

const mystyle = {
    color: "white",
    backgroundColor: "gold",
    padding: "10px",
    margin:"50px",
    fontFamily: "Arial",
    justifyContent: "center",
    borderRadius: "10px",
  };


  function GifContainer(props) {
    const userInput = props.userInput;
    const handleInput = props.handleInput;
    const gifResults = props.gifResults;
    const notEnoughResults = props.notEnoughResults;
    const render = props.render;
    return (
        <div style={mystyle}>
           <div>
          <input type="text" className="gifInput" value={userInput} onChange={handleInput}/>
          </div>
          <div className="gifContainer">
            {gifResults[0] === `Not enough data` ? notEnoughResults() : render()}
          </div>
        </div>
    )
  }
  export default GifContainer;