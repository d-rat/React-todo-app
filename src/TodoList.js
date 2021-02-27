import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todoList, setTodoList] = useState([
    { text: "make a blog", isCompleted: false, id: uuidv4() },
  ]);

  const handleDelete = (i) => {
    console.log(i);
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== i);
    });
  };

  const handleClick = (todo) => {
    if (todo) {
      setTodoList((prev) => [
        ...prev,
        { text: todo, isCompleted: false, id: uuidv4() },
      ]);
    }
  };

  const handleStatus = (i) => {
    setTodoList((prev) => {
      return prev.map((item) => {
        return item.id === i
          ? { ...item, isCompleted: !item.isCompleted }
          : { ...item };
      });
    });
  };

  return (
    <div className="todoList">
      <h1>Dilip's Todo List</h1>
      <AddTodo add={handleClick} />
      {todoList.map((todo) => (
        <Todo
          del={handleDelete}
          sta={handleStatus}
          status={todo.isCompleted}
          id={todo.id}
          key={todo.id}
          value={todo.text}
        />
      ))}
    </div>
  );
}

export default TodoList;
