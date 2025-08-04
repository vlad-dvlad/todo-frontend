import z from "zod"

export const taskStatus = z.enum(['DONE', 'IN_PROGRESS', 'TODO', 'REJECTED'])

export const taskSchema = z.object({
  id: z.string(),
  name: z.string().min(2),
  status: z.enum(['DONE', 'IN_PROGRESS', 'TODO', 'REJECTED']),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const createTaskSchema = taskSchema.omit({ id: true, createdAt: true, updatedAt: true })
export const updateTaskSchema = taskSchema.omit({ id: true, createdAt: true, updatedAt: true })