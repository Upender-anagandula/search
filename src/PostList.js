import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post:[],
             errMsg:'msg',
             number:1

           }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(response => {
            console.log(response);
            this.setState({post:response.data})
            this.setState({number:this.this.state.number
            +1})
            console.log(this.post);
        })
        .catch(error => {
            this.setState({errMsg:'some serve problem is there'})
            console.log("server masg");
        })
    }
    
    render() {
        const {post,errMsg}=this.state
       
        return (
           <div>
                List Of posts
                {
                   post.length ?
                   post.map(posts => <div key={posts.id}><b>{posts.id}:</b>{posts.title}</div>):
                   null
                  }
                  { errMsg ? <div>{errMsg} </div> : ''}
               
       </div>
             
        )
    }
}

export default PostList
