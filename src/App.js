import './App.css'
import React, { useState, useEffect } from 'react';
import LocalData from './components/LocalData';
import ClickCount from './components/ClickCount';
import ListDataBack from './components/ListDataBack';
import AddUser from './components/AddUser';
import RefreshData from './components/RefreshData';
import {
  getUsers,
  deleteUser,
} from './services/CrudUser';


function App() {
  const [count, setCount] = useState(0); // hook
  const [dataBack, setDataBack] = useState([]); // hook
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // const data = await getUsers() es lo mismo que la linea de abajo (no habilitar)
    getUsers().then((data) => {
      console.log("aqui es data", data)
      setDataBack(data)
    })
  }, []);

  return (
    <div className="nombreDeLaClase">
      <h2>Hola fran</h2>
      <LocalData />
      <ClickCount count={count} setCount={setCount} />
      <ListDataBack
        dataBack={dataBack}
        setDataBack={setDataBack}
        deleteUser={deleteUser}
      />
      <AddUser
        setUserInput={setUserInput}
        dataBack={dataBack}
        userInput={userInput}
        setDataBack={setDataBack}
      />
      <RefreshData
        getUsers={getUsers}
        setDataBack={setDataBack}
      />
    </div>
  )
}

export default App;
