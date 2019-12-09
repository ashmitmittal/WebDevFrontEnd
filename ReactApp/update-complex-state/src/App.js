import React, {useState} from 'react';
import './App.css';

function App() {
  const [instructors,setValue] = useState(
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
    <li style={{color: "red"}} key={index}>
      <h3>{inst.name}</h3>
      <h4>hobbies: {inst.hobbies.join(", ")}</h4>
    </li>
  ));

  // const remove = () => {
  //   const NewInst = [...instructors];
  //   const randomInst = Math.floor(
  //     Math.random() * NewInst.length
  //   );
  //   const randomHobbies = Math.floor(
  //     Math.random() * NewInst[randomInst].hobbies.length
  //   );
  //   NewInst[randomInst].hobbies.splice(randomHobbies,1);
  //   setValue(NewInst);
  // }

  setTimeout(() => {
    const NewInst = [...instructors];
    const randomInst = Math.floor(
      Math.random() * NewInst.length
    );
    const randomHobbies = Math.floor(
      Math.random() * NewInst[randomInst].hobbies.length
    );
    NewInst[randomInst].hobbies.splice(randomHobbies,1);
    setValue(NewInst);
  }, 5000);


  return (
    <div className="App">
      <ul>
        {instructor}
      </ul>
      <div className="foot">
        <footer><h1><i>This code will automatically delete the hobbies randomlly after 5 sec an example of states with functional based component</i></h1></footer>
      </div>
    </div>
  );
}

export default App;
