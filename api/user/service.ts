import { User } from "@/models/user"
import { api, PageParams, PaginatedApiResponse } from "@/shared"

export const getUsers = async (params: PageParams)  => {
    try {
        const data = await api.get<PaginatedApiResponse<User>>('/users', {
            params
        })
        return data;
    } catch (e) {
        console.error(e)
    }
} 