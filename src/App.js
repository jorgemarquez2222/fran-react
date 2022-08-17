import './App.css'
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

async function deleteUser(person) {
  const options = { 
    data: { 
      id: person.id
  }}
  // axios.request(options).then(function (response) {
  //   console.log("aqui la respuesta de la llamada",response.data);
  //   return response.data
  // }).catch(function (error) {
  //   console.error(error);
  // });
  const response = await axios.delete('http://localhost:3000/user', options)
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
  const [ userInput, setUserInput ] = useState({name:""});

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
  const clickUser = async (item) =>{
    console.log('Holaaa', item)
    console.log(await deleteUser({ id: item.id}))
    const tmp = [...dataBack]
    const f = tmp.filter((i) => i.name !== item.name)
    setDataBack(f)
  }
  const listData = (
    <ul>
      {
        dataBack.map((item, index)=>{
          return <li key={index} 
           >{item.name}
           <button onClick={() => clickUser(item)}>
        X
      </button>
           </li>
        })
      }
    </ul>
  )
  const handleChange = (e) => {
    setUserInput({ ...userInput, name: e.currentTarget.value })

    console.log('userInput', userInput)
    e.preventDefault();

}
  return (
    <div className="nombreDeLaClase">
      <h2>Hola fran</h2>
      {element}
      {listData}

      {userInput.name}
      <input value={userInput.name} type="text" onChange={handleChange} />

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
