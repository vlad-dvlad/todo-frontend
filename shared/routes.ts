export const RouteE = {
    ROOT: '/',
    TASKS: '/tasks',
    TASK_ID: (id: string | number) => `tasks/${id}`,
    USERS: '/users',
    USER_ID: (id: string | number) => `/user/${id}`
}