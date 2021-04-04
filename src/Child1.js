import React ,{useState}from 'react';
 
function Child1() {    
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
export default Child1;
