import React, { useState, FormEvent, ChangeEvent } from "react"
import { v4 as uuidv4 } from "uuid";

import { Todo } from "../Types/types";



import Add from "./Add";
import Row from "./Row";

export const data = [
  {
    id: "0",
    title: "Task 1",
    task: "Do laundry 1",
    isCompleted: false,
  },
  {
    id: "1",
    title: "Task 2",
    task: "Do laundry 2",
    isCompleted: false,
  },
  {
    id: "2",
    title: "Task 2",
    task: "Do laundry 3",
    isCompleted: false,
  },
]

const Todos = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>(data);

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    setTask("")
  }

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    setTask(value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    }
    task && handleAddTodo(todo)
  }

  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <Add handleChange={handleChange} handleSubmit={handleSubmit} task={task} />
      <div className="h-10" />
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDelete={handleDeleteTodo}
          handleCheck={handleCheckTodo}
        />
      ))}
      {!(todos.length > 0) && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Please add a todo!
        </p>
      )}
      {(todos.length > 0) && (
        <p>
          [{todos.filter((todo) => !todo.isCompleted).length} of {todos.length}] todos remaining
        </p>
      )}
    </section>
  );
}

export default Todos;