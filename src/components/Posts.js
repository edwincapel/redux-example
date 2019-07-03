import React, { Component } from 'react'
import axios from 'axios';



class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { posts } = this.state

        const postItems = posts.map(post => (
            <div key={post.id}>
                <h3>
                    {post.title}
                </h3>
                <p>
                    {post.body}
                </p>
            </div>
        ))

        return (
            <div> 
                <h1>Post</h1>
                {postItems}
            </div>
        )
    }
}

export default Posts;