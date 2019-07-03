import { FETCH_POSTS, NEW_POST } from '../actions/types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => dispatch({
        type: FETCH_POSTS,
        payload: response.data
    }));
}

export const createPost = postData => dispatch => {
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'content-type': 'application/json'
        },
        data: JSON.stringify(postData)
    })
    .then(response => dispatch({
        type: NEW_POST,
        payload: response.data
    }))
    .catch(function (error) {
        console.log(error);
    });
}