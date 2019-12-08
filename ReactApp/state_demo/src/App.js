import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [name,setName] = useState('Ashmit');
  const [name2,setName2] = useState('Ashmit');
  setTimeout(() =>{
    setName('Piyush')
    setName2('coder')
  },5000)
  return (
    <div className="App">
      <p>
        Hi my name is {name}. People call me {name2}.
      </p>
{/* <button
onClick={handelClick}
>Click me</button> */}

    </div>
  );
}

export default App;
