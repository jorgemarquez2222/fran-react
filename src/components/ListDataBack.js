import React from 'react'

const ListDataBack = ({
    dataBack,
    setDataBack,
    deleteUser,
    setUserInput,
    userInput,
    updateUser

}) => {

    const clickUser = async (item) => {
        console.log("Hola fran", item)
        const tmp = [...dataBack]
        const f = tmp.filter((i) => i.name !== item.name)
        setDataBack(f)
        await deleteUser({ id: item.id })
    }

    const clickChange = (item) => {
        const obj = item
        setUserInput({id: obj.id , name: obj.name})
        //updateUser()
    }

    return (<>
        <ul>
            {
                dataBack.map((item, index) => {
                    return <li key={index}>
                        {item.name}
                        <button onClick={() => clickUser(item)} >Delete</button>
                        <button onClick={() => clickChange(item)}>Modify</button>
                    </li>
                })
            }
        </ul>
    </>)
}

export default ListDataBack