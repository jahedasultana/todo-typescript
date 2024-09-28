import { createContext, ReactNode, useContext, useState } from "react"

export type TodoProviderProps = {
    children : ReactNode;
};

export type Todo = {
    id: string,
    task: string,
    completed: boolean,
    createAt: Date,
}

export type TodoContext = {
    todos : Todo[],
    handleAddTodo: (task:string) => void,
    toggleTodoComplete: (id:string) => void,
    handleDelete: (id:string) => void,
}

// create context is here
export const TodoProvider = createContext<TodoContext | null>(null);

export const AuthProvider = ({children} : TodoProviderProps) => {

    const [todos,setTodos] = useState<Todo[]>(()=> {
        try {
            const newTodos = localStorage.getItem("todos") || "[]"
            return JSON.parse(newTodos) as Todo[]
        } catch (err) {
            console.log(err);
            return []
        }
    });

    const handleAddTodo = (task:string) => {
        setTodos((pre) => {

            const newTodos:Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createAt: new Date, 
                },
                ...pre
            ]
            console.log("mt pre", pre);
            console.log(newTodos);
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos;
        })
    }

    const toggleTodoComplete = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((todo) => {
                if(todo.id === id){
                    return {...todo,completed: !todo.completed}
                }
                return todo
            })
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }

    const handleDelete = (id:string) => {
        setTodos((prev)=>{
            const newTodos = prev.filter((filter) => filter.id !== id)
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }



    return(
        <TodoProvider.Provider value={{todos,handleAddTodo,toggleTodoComplete,handleDelete}}>
            {children}
        </TodoProvider.Provider>
    )
}


// consumer 
export const useTodos = () => {
    const todosConsumer = useContext(TodoProvider)
    if(!todosConsumer){
        throw new Error("the data is not get")
    }
    return todosConsumer;
}