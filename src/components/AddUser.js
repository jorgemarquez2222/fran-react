import React from 'react';

const AddUser = ({
    setUserInput,
    dataBack,
    userInput,
    setDataBack,
}) => {
    const cambioDeInput = (e) => {
        setUserInput(e.currentTarget.value)
      }
    return (<>

        <input value={userInput} type="text" onChange={cambioDeInput} placeholder="Enter task..." />
        <button onClick={() => {
            const copia = [...dataBack]
            copia.push({
                name: userInput,
                edad: 50,
            })
            setDataBack(copia)
            console.log("Ejecutando boton")
        }}>
            Add user
        </button>
    </>)
}

export default AddUser