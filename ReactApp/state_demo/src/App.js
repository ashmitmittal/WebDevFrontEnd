import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [name,setName] = useState('Ashmit');
  const handelClick = () =>{
    setName('Piyush')
  }
  return (
    <div className="App">
      <p>
        Hi my name is {name}. People call me {name}. full name {name}
      </p>
<button
onClick={handelClick}
>Click me</button>

    </div>
  );
}

export default App;
