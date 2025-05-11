import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Navbar,
} from 'react-bootstrap';

function TodoApp() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask === "") {
      alert("Please enter a valid task.");
      return;
    }
    setTodoList([...todoList, trimmedTask]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>To-Do App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row className="mb-3">
          <Col md={8}>
            <Form.Group controlId="taskInput">
              <Form.Control
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Button variant="primary" onClick={handleAddTask} className="w-100">
              Add
            </Button>
          </Col>
        </Row>

        <ListGroup>
          {todoList.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {item}
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

export default TodoApp;
