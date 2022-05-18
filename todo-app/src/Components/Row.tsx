import React from "react";

import { TodoProps } from "../Types/types";

const Row = ({
  todo: { id, task, isCompleted },
  handleCheck,
  handleDelete,
}: TodoProps) => (
  <div>
    <p>{task}</p>
    <div>
      <button
        aria-label="Delete a todo"
        onClick={() => handleDelete(id)}
      >
      X
      </button>
      <input
        type={"checkbox"}
        onChange={() => handleCheck(id)}
        className={"form-checkbox h-7 w-7"}
      />
    </div>
  </div>
)