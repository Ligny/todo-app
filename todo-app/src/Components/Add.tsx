import React from "react";

import { AddProps } from "../Types/types";

import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg"

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
    >
      <PlusIcon />
    </button>
  </form>
)

export default Add;
