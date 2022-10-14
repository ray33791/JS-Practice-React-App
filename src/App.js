import React from 'react' 
import logo from './logo.svg';
import './App.css';


function App() {

  const [color, setColor] = React.useState('');
  const [top, setTop] = React.useState('');
  const [left, setLeft] = React.useState('');

  const arr = ['банан', 'яблоко', 'груша'];
  const maxIndex = arr.length - 1;
  const [index, setIndex] = React.useState(0);

  function getRandomColor() {
    for (var i = 0; i < 6; i++) {
     setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`);
   }
}

function runAway() {
   setTop(`${Math.floor(Math.random()*1000)}px`);
   setLeft(`${Math.floor(Math.random()*1000)}px`);
}

const getRandom = () => {
  setIndex(Math.ceil(Math.random() * maxIndex));

}

const updateStyles = () => {
        getRandomColor();
        runAway();
        getRandom();
      };

  

  return (
    <div>
      <button 
    style ={{backgroundColor: color, width: '80px', height: '80px', cursor: 'pointer', borderRadius: '100%', position: 'absolute', top: top, left: left}}
    onClick={updateStyles}></button>
    </div>
  )};


export default App;
