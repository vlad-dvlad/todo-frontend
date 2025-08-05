import { useQuery } from "@tanstack/react-query";
import { TASK_KEY } from "./config";
import { getTasks } from "./service";
import { PageParams } from "@/shared";

export const useGetTasks = (params: PageParams) => useQuery({
    queryKey: [TASK_KEY.GET_ALL, params.page, params.limit],
    queryFn: () => getTasks(params).then((res) => res?.data),
})