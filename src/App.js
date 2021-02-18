import React,{useState}from 'react'
import Child1 from './Child1';


function App() {
  const [count, setCount] = useState(10)

     const  onChangeHandler=()=>{
      return <Child1 />
    }

    return (
    <div>
    <button onClick={onChangeHandler} >submitt</button>
      </div>
     );
}

export default App;
