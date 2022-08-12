import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

async function getUsers() {
  const options = { method: 'GET', url: 'http://localhost:3000/users' };
  // axios.request(options).then(function (response) {
  //   console.log("aqui la respuesta de la llamada",response.data);
  //   return response.data
  // }).catch(function (error) {
  //   console.error(error);
  // });
  const response = await axios.request(options)
  return response.data
}

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
  const [dataBack, setDataBack] = useState([]); // hook
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    getUsers().then((data)=>{
      console.log("aqui es data", data)
      setDataBack(data)
    })
  }, []);
  const element = (
    <ul>
      {data.length &&
        data.map((item, index) => {
          return <li key={index}> {item.name} </li>
        })
      }
    </ul>
  )
  const listData = (
    <ul>
      {
        dataBack.map((item, index)=>{
          return <li key={index}>{item.name}</li>
        })
      }
    </ul>
  )
  
  return (
    <div className="nombreDeLaClase">
      <h2>Hola fran</h2>
      {element}
      {listData}
      <p>tu cliqueaste {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => {
        getUsers().then((data)=>{
          setDataBack(data)
        })
      }}>
        Click al backend
      </button>
     
    </div>
  )
}

export default App;
