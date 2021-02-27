import React, { useState } from "react";

function AddTodo({ add }) {
  const [input, setInput] = useState("");
  return (
    <div className="addTodo">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="enter todo"
      />
      <button
        onClick={() => {
          add(input);
          setInput("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
