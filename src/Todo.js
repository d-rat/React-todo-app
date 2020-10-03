import React from "react";
import { ListGroupItem, Button, Input } from "reactstrap";
import "./Todo.css";

function Todo({ todo, id, deleteTodo, completeTodo }) {
  return (
    <ListGroupItem>
      <Input
        type="checkbox"
        onChange={() => {
          completeTodo(id);
        }}
      />
      <p className={`${todo.isCompleted && "todo-is-completed"}`}>
        {todo.content}
      </p>
      <Button
        color="secondary"
        size="sm"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </Button>
    </ListGroupItem>
  );
}

export default Todo;
