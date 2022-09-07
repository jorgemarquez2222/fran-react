import React from 'react';

const RefreshData = ({
    getUsers,
    setDataBack,
    updateUser,
    userInput
}) => {
    return (<>
        <button onClick={() => {
            getUsers().then((data) => {
                setDataBack(data)
            })
        }}>
            Click al backend
        </button>
        <button onClick={() => {
            //updateUser().then((data) => {})
            updateUser(userInput)
        }}>
            Actualizar
        </button>

    </>)
}

export default RefreshData