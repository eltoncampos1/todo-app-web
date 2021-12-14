import { createContext, FormEvent, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Todo, TodoService } from "../services/todoService";
import update from "immutability-helper";
type TodoProviderProps = {
    children: ReactNode;
}

type TodoContext = {
    todos: Todo[]
    deleteTodo: (todoId: string) => Promise<void>
    moveCard: (dragIndex: number, hoverIndex: number) => void
    handleSubmit: (e: FormEvent, value: string) => Promise<void>
}

const TodoContext = createContext({} as TodoContext)

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([{
        id: '',
        content: '',
        isComplete: false
    }])



    const getTodos = useCallback(async () => {
        const data = await TodoService.getTodos()

        setTodos(data as any)

    }, [todos])

    const deleteTodo = async (todoId: string): Promise<void> => {
        await TodoService.deleteTodo(todoId)
        getTodos()
    }

    const moveCard = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            const dragCard = todos[dragIndex];
            setTodos(
                update(todos, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard]
                    ]
                })
            );
        },
        [todos]
    );

    const handleSubmit = async (e: FormEvent, value: string) => {
        e.preventDefault()
        await TodoService.createTodo({ content: value, isComplete: false })
        getTodos()
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <TodoContext.Provider value={{ todos, deleteTodo, moveCard, handleSubmit }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext)