import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increament,decreament} from './CounterAction';
import {loggedIn} from './isLogginAction';

function incrementReducer() {
  const counter =useSelector(state => state.count)
  const isLoggedIn =useSelector(state => state.LoggedIn)
  const dispatch=useDispatch();
  console.log(counter);
  return (
    <div className="App"> 
    <div>
 <h1>our App</h1>
  <p>counter:{counter}</p>
  <button style={{marginRight:"10px",color:"blue"}} onClick={()=> dispatch(increament())}>+</button> 
  <button onClick={()=> dispatch(decreament())}>-</button>
  </div>
  <div className="loginform">
    { !isLoggedIn ? <button style= {{background:"blue"}} onClick={()=> dispatch(loggedIn())}>Login</button> :
    <div> <p>Your logged in</p>
    <button style= {{background:"red"}}>LogOut</button>
    </div>
    }
  </div>
    </div>
   );
}

export default increamentReducer;
