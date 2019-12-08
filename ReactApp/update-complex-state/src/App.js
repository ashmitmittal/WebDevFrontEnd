import React, {useState} from 'react';
import './App.css';

function App() {
  const [instructors,setName] = useState(
    [
      {
        name:'Ashi',
        hobbies: ['coding','singing']
      },
      {
        name: 'manshu',
        hobbies: ['study','dancing']
      }
    ]
  );


  const instructor = instructors.map((inst,index) => (
    <li key={index}>
      <h3>{inst.name}</h3>
      <h4>hobbies: {inst.hobbies.join(", ")}</h4>
    </li>
  ));

  return (
    <div className="App">
      <ul>
        {instructor}
      </ul>
    </div>
  );
}

export default App;
