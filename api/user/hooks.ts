import { useQuery } from "@tanstack/react-query";
import { USER_KEY } from "./config";
import { getUsers } from "./service";
import { PageParams } from "@/shared";

export const useGetUsers = (params: PageParams) => useQuery({
    queryKey: [USER_KEY.GET_ALL, params.page, params.limit],
    queryFn: () => getUsers(params).then((res) => res?.data),
})