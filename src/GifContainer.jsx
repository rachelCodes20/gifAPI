import React from 'react';

const mystyle = {
    color: "white",
    backgroundColor: "gold",
    padding: "10px",
    marginTop:"10px",
    fontFamily: "Arial",
    width: "50%"
  };


  function GifContainer(props) {
    return (
        <div style={mystyle}>
          <button type="submit" onClick={props.handleSubmit}>test</button>
        </div>
    )
  }
  export default GifContainer;