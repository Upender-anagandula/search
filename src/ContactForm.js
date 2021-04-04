import React,{useState} from 'react'
import firebaseDb from './TestForm';



const ContactForm=(props)=>{
    const initialFieldValues={
         firstname:'',
        lastname:'',
         email:'',
         address:''      
     }
const [values, setValues]=useState(initialFieldValues)
 console.log(values);
 const changeHandler = e => {
    let { name,value }= e.target;
//console.log(e.target);
      setValues({
           ...values,
           [name]:value 
         })
              
         console.log(values);
       }

const submitHandler = e  =>{
  e.preventDefault()
  firebaseDb.child('/student').push(
    values, err=>
    {
        if(err)
        console.log(err);
        else
        console.log("inserted");
    });
  
  
}

    return(
        <div className="form">
        <h1>Enter Your Details</h1>
      <form autoComplete="off" onSubmit={submitHandler}>
    <div className="form-group" >
      <label>First Name</label> <br />
      <input type="text" className="form-control col-sm-7"placeholder="first name" name="firstname"  value={values.firstname} onChange={changeHandler}/>
    </div>
    <div className="form-group">
     <label>Last Name</label><br /> 
    <input type="text" className="form-control col-sm-7" placeholder="last name" name="lastname"  value={values.lastname} onChange={changeHandler} />
  </div>
    <div className="form-group">
      <label>Email address</label><br />
      <input type="email"  className="form-control col-sm-7"  placeholder="name@example.com" name="email"  value={values.email} onChange={changeHandler} />
    </div>
    
    <div className="form-group">
      <label>Address</label><br />
      <textarea className="form-control col-sm-7"   rows="3" name="address"  value={values.address} onChange={changeHandler}></textarea>
    </div>
    <button type="submit" className="btn btn-primary" >submit</button>
  </form>
      </div>
    );
}

export default ContactForm;