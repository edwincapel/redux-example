import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import {
  Container,
  Row
} from 'reactstrap';

import Posts from './components/Posts';
import PostFrom from './components/Postform';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Container fluid className="p-5">
        <Row>
          <PostFrom />
          <Posts />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
