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
  addUser,
  updateUser,
} from './services/CrudUser';


function App() {
  const [count, setCount] = useState(0); // hook
  const [dataBack, setDataBack] = useState([]); // hook
  const [userInput, setUserInput] = useState({
    id: "",
    name:""
  });

  useEffect(() => {
    // const data = await getUsers() es lo mismo que la linea de abajo (no habilitar)
    getUsers().then((data) => {
      console.log("aqui es data", data)
      setDataBack(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="nombreDeLaClase">
      <h2>Hola fran</h2>
      <LocalData />
      <ClickCount
        count={count}
        setCount={setCount}
      />
      <ListDataBack
        dataBack={dataBack}
        setDataBack={setDataBack}
        setUserInput={setUserInput}
        deleteUser={deleteUser}
        updateUser={updateUser}
        
      />
      <AddUser
        setUserInput={setUserInput}
        dataBack={dataBack}
        userInput={userInput}
        setDataBack={setDataBack}
        addUser={addUser}
      />
      <RefreshData
        getUsers={getUsers}
        setDataBack={setDataBack}
        updateUser={updateUser}
        userInput={userInput}
      />
    </div>
  )
}

export default App;
