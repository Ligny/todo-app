import { ChangeEvent, FormEvent } from "react";

export type Todo = {
  id: string
  task: string
  isCompleted: boolean
}

export type TodoProps = {
  todo: Todo
  handleCheck: (id: string) => void
  handleDelete: (id: string) => void
}

export type AddProps = {
  task: string
  handleSubmit: (e: FormEvent) => void
  handleChange: (e: ChangeEvent) => void
}