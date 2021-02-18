import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={props.onButtonC}>Parent</button>
        </div>
    )
}

export default Child
