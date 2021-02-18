import React from 'react'
import ContactForm from './ContactForm';
import firebaseDb from '../TestForm';

const Contactus=()=>{
    const addOrEdit= obj=>{
        console.log(obj);
        firebaseDb.child('/student').push(
            obj, err=>
            {
                if(err)
                console.log(err);
                else
                console.log("inserted");
            }
        )

    }
    return(
<div>
        <ContactForm addOrEdit={addOrEdit} />
         </div>

    );
}

export default Contactus;