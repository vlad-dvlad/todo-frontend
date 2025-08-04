import { Task } from "@/models/task"
import { api } from "@/shared"

export const getTasks = async () => {
    try {
        const data = await api.get<Task>('/tasks')
        return data;
    } catch (e) {
        console.error(e)
    }
}