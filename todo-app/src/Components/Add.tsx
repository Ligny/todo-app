import React from "react";

import { AddProps } from "../Types/types";

const Add = ({
  handleChange,
  handleSubmit,
  task,
}: AddProps) => (
  <form
    onSubmit={handleSubmit}
    className={"flex justify-between w-full"}
  >
    <input
      type={"text"}
      name={"task"}
      value={task}
      onChange={handleChange}
      className={"flex-1 rounded shadow p-2 text-grey-dark mr-2"}
    />
    <button
      type={"submit"}
      aria-label={"Add todo"}
      className={"h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"}
    >
      ADD
    </button>
  </form>
)

export default Add;
