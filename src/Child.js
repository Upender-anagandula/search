import React from 'react'

function Child() {
    const handleSubmit=(e)=>{
console.log(e);
    }
    return (
        <div>
            <form>
            <input type="text " name="name"/>
            <button onClick={handleSubmit}>Submit</button>
            </form>
           </div>
    )
}

export default Child
