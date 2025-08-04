import z from 'zod'

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(2),
  email: z.string(),
  age: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const createUserSchema = userSchema.pick({ name: true, age: true, email: true })
export const updateUserSchema = userSchema.pick({ name: true, age: true, email: true })
