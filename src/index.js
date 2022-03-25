
import React from 'react';
import { render } from 'react-dom';
import App from './App';

// render(
//   // wrap the App in the Provider Component and pass in the store
//   document.getElementById('root')
// );

// const Hello = () => {
//     return (
//         <div>
//             <h1>Hiiii</h1></div>
//     )
//   }


// const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, document.getElementById('root'));

//render(<Hello />, document.getElementById('#root'));