import React from 'react'

const ListDataBack = ({
    dataBack,
    setDataBack,
    deleteUser
}) => {

    const clickUser = async (item) => {
        console.log("Hola fran", item)
        const tmp = [...dataBack]
        const f = tmp.filter((i) => i.name !== item.name)
        setDataBack(f)
        await deleteUser({ id: item.id })
    }

    return (<>
        <ul>
            {
                dataBack.map((item, index) => {
                    return <li key={index}>
                        {item.name}
                        <button onClick={() => clickUser(item)} >X</button>
                    </li>
                })
            }
        </ul>
    </>)
}

export default ListDataBack