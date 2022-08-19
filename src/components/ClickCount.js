import React from 'react';

const ClickCount = ({
    count,
    setCount
}) => {
    return (<>
        <p>tu cliqueaste {count} veces</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </>)
}

export default ClickCount