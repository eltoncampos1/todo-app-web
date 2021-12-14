import { api } from "./api"

export type Todo = {
    id: string;
    content: string;
    isComplete?: boolean;
}

type Payload = {
    content: string;
    isComplete?: boolean;
}

export type Response = {
    data: Todo[]
}

const TodoService = {
    getTodos: async (): Promise<Response> => {
        const { data } = await api.get('/list')

        return data
    },
    createTodo: async (data: Payload): Promise<void> => {
        await api.post('/create', data)
    },
    deleteTodo: async (todoId: string): Promise<void> => {
        await api.delete(`/delete/${todoId}`)
    }
}

export { TodoService }