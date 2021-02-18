import React, { Component } from 'react';
import {Themecontext} from './App';

export default class Child2 extends Component {
themestyles(dark){
    return {
        backgroundColor:dark ? '#333':'#ccc',
        color: dark ? '#333':'#ccc',
        padding:'1rem',
        margin:'1rem'
    }
}
    render() {
        return (
            <Themecontext.Consumer>
                {darkTheme =>{
                    return <div style={this.themestyles(darkTheme)}>Class Component</div>
                }}
            </Themecontext.Consumer>
                    
        )
    }
}
