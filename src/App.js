
import React from 'react';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'

const App = () => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img width={300} height={100} variant="top" src="https://redux.js.org/img/redux-logo-landscape.png" />
      <Card.Body>
        <Card.Title><h1>ToDo App</h1></Card.Title>
        <Button variant="primary"> <AddTask /></Button>
        <Card.Text>
        <ListTask />
        </Card.Text>
        
      </Card.Body>
    </Card>
     
      <AddTask />
     
    </div>
  );
};

export default App;
