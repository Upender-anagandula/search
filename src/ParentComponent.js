import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ReactDOM from 'react-dom';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCity: ''
        }
    }
  changeHandler(){
      ReactDOM.render(<ContactForm />,document.getElementById('teja'));
  }
    render() {
        console.log("first render method");
                return (
            <div className="card_option">
                <h1> Select City </h1>
                <select className="city" onChange={this.changeHandler}>
                    <option>pune</option>
                    <option>Hyderabad</option>
                </select>
               <div className="city_selection" id="teja">
                </div>
            </div>
        )
    }
    render() {
        console.log("second render method");
        return (
    <div className="card_option">
        <h1> Select second City </h1>
        
       <div className="city_selection" id="teja">
        </div>
    </div>
)
}
}

export default ParentComponent;