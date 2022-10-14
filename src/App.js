import React from 'react' 
import logo from './logo.svg';
import './App.css';


function App() {

  const [color, setColor] = React.useState('')

  function getRandomColor() {
    for (var i = 0; i < 6; i++) {
     setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
   }
};
  

  return (
    <div>
      <button 
    style ={{backgroundColor: color, width: '80px', height: '80px', cursor: 'pointer', borderRadius: '100%'}}
    onClick={getRandomColor}>Nigger</button>
    </div>
  )};


export default App;
