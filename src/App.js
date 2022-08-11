import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const data = [
    {
      name: "Fran",
      edad: 50,
    }, {
      name: "Jorge",
      edad: 33,
    }, {
      name: "Osiris",
      edad: 50,
    }
  ]
  const [count, setCount] = useState(0); // hook
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const element = (
    <ul>
     { data.length &&
      data.map((item, index) => {
        return <li key={index}> {item.name} </li>
      })
     }
    </ul>
  )
  return (
    <div className="nombreDeLaClase">
      <h2>Hola fran</h2>
      {element}
      <p>tu cliqueaste {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default App;
