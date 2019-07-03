import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Postform extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(post)
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { title, body } = this.state

        return (  
        <div>
                <h1>Add post</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Title: </Label>
                        <Input 
                            type="text" 
                            name="title" 
                            id="title" 
                            placeholder="..." 
                            value = {title}
                            onChange = {this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Body: </Label>
                        <Input 
                            type="textarea" 
                            name="body" 
                            id="title" 
                            placeholder="..." 
                            value = {body}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
        </div>
        )
    }
}

export default Postform