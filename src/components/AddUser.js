import React from 'react';

const AddUser = ({
    setUserInput,
    dataBack,
    userInput,
    setDataBack,
    addUser,
}) => {
    const cambioDeInput = (e) => {
        //setUserInput(e.currentTarget.value)
        console.log("verifico", userInput)
        setUserInput({
            id: userInput.id,
            name:e.currentTarget.value
        })
        //console.log("userimput ", userInput)
        //setUserInput(userInput)

    }
    return (<>

        <input value={userInput.name} type="text" onChange={cambioDeInput} placeholder="Enter task..." />
        <button onClick={ async () => {
            const copia = [...dataBack]
            copia.push({
                name: userInput.name,
                edad: 50,
            })
            await addUser(userInput.name)
            setDataBack(copia)
            console.log("Ejecutando boton")
            setUserInput({
                id: "",
                name:""
            })
        }}>
            Add user
        </button>
    </>)
}

export default AddUser