import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'; 

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

        this.props.createPost(post)
        this.setState({
            body: '',
            title: ''
        })
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

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform)