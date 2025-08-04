import z from "zod"
import { createTaskSchema, taskSchema, taskStatus, updateTaskSchema } from "./schema"

export type Task = z.infer<typeof taskSchema>
export type TaskStatusE = z.infer<typeof taskStatus>
export type CreateTask = z.infer<typeof createTaskSchema>
export type UpdateTask = z.infer<typeof updateTaskSchema>