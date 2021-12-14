import { createContext, FormEvent, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Payload, Todo, TodoService } from "../services/todoService";
import update from "immutability-helper";
type TodoProviderProps = {
    children: ReactNode;
}

type TodoContext = {
    todos: Todo[]
    value: string
    deleteTodo: (todoId: string) => Promise<void>
    moveCard: (dragIndex: number, hoverIndex: number) => void
    handleSubmit: (e: FormEvent) => Promise<void>
    getValue: (value: string) => void
    handleEditTodo: (todoId: string, value: Payload) => Promise<void>
}

const TodoContext = createContext({} as TodoContext)

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([{
        id: '',
        content: '',
        isComplete: false
    }])

    const [value, setValue] = useState('')

    const getValue = (value: string) => {
        setValue(value)
    }

    const handleEditTodo = async (todoId: string, value: Payload) => {
        await TodoService.updateTodo(todoId, value)
        setValue('')
        getTodos()
    }

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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await TodoService.createTodo({ content: value, isComplete: false })
        setValue('')
        getTodos()
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <TodoContext.Provider value={{ todos, deleteTodo, moveCard, handleSubmit, handleEditTodo, value, getValue }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext)