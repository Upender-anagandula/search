import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"Parent Component"
         }
         this.onButtonClick=this.onButtonClick.bind(this);
     }
     onButtonClick() {
         alert("hello child component");
     }

    render() {
        return (
            <div>
              
              <Child onButtonC={this.onButtonClick}/>
                </div>
        )
    }
}

export default Parent
