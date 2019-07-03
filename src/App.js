import React from 'react';
import './App.css';
import Posts from './components/Posts'
import PostFrom from './components/Postform'
import {
  Container,
  Row
} from 'reactstrap';


function App() {
  return (
    <Container fluid className="p-5">
      <Row>
        <PostFrom />
        <Posts />
      </Row>
    </Container>
  );
}

export default App;
