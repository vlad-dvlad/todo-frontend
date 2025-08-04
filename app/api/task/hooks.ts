import { useQuery } from "@tanstack/react-query";
import { TASK_KEY } from "./config";
import { getTasks } from "./service";

export const useGetTasks = () => useQuery({
    queryKey: [TASK_KEY.GET_ALL],
    queryFn: () => getTasks()
})