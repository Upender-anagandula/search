 import { combineReducers } from 'redux';
 import Counter from '../reducer/CounterReducer';
 import LoggedIn from '../reducer/isLoggedInReducer';

 const JointedReducer=combineReducers({
     count:Counter,
     LoggedIn:LoggedIn
 });
 
 export default JointedReducer;