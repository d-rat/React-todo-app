import React from "react";
import Basket from "../assets/delete.svg";

function Todo({ value, del, id, status, sta }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={status}
        onClick={() => {
          sta(id);
        }}
      />
      <p style={{ textDecoration: status ? "line-through" : "none" }}>
        {value}
      </p>

      <span
        onClick={() => {
          del(id);
        }}
      >
        <img src={Basket} alt="del" />
      </span>
    </div>
  );
}

export default Todo;
