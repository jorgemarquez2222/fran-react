import React from 'react';

const RefreshData = ({
    getUsers,
    setDataBack,
}) => {
    return (<>
        <button onClick={() => {
            getUsers().then((data) => {
                setDataBack(data)
            })
        }}>
            Click al backend
        </button>
    </>)
}

export default RefreshData