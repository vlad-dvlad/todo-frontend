import { Task } from "@/app/models/task"
import { api } from "@/app/shared"

export const getTasks = async () => {
    try {
        const data = await api.get<Task>('/tasks')
        return data;
    } catch (e) {
        console.error(e)
    }
}