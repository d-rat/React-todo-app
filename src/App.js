import React, { useState } from "react";

import {
  Jumbotron,
  ListGroup,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
} from "reactstrap";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      content: "Learn Javascript",
      isCompleted: false,
    },
    {
      content: "Goto Mars",
      isCompleted: false,
    },
    {
      content: "Colonize Mercury",
      isCompleted: false,
    },
  ]);

  const [todo, setTodo] = useState("");

  function handleClick() {
    setTodos((e) => {
      return [...e, { content: todo, isCompleted: false }];
    });
    setTodo("");
  }

  function handleDelete(todoIndex) {
    let remain = [...todos];
    remain.splice(todoIndex, 1);
    setTodos([...remain]);
  }

  function handleComplete(todoIndex) {
    let remain = [...todos];
    remain[todoIndex].isCompleted = !remain[todoIndex].isCompleted;
    setTodos([...remain]);
  }

  return (
    <div className="box" style={{ padding: "20px" }}>
      <Jumbotron style={{ textAlign: "center" }}>
        <h2 className="text-primary">React ToDo App</h2>
      </Jumbotron>
      <InputGroup>
        <Input
          placeholder="Enter Todo..."
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <InputGroupAddon addonType="append">
          <Button color="secondary" onClick={handleClick}>
            Add Todo
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <ListGroup>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            id={index}
            deleteTodo={handleDelete}
            completeTodo={handleComplete}
          />
        ))}
      </ListGroup>
    </div>
  );
}

export default App;
