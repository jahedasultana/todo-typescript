import { useTodos } from "../AuthProvider/AuthProvider";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
    const {todos,toggleTodoComplete,handleDelete} = useTodos()
    const [todoSearch] = useSearchParams();
    const todosData = todoSearch.get("todos")


    let filterdata = todos;

   if(todosData === "active"){
    filterdata = filterdata.filter((task) => !task.completed )
   }
   if(todosData === "completed"){
    filterdata = filterdata.filter((task) => task.completed )
   }


    return (
        <ul className="space-y-4">
            {
                filterdata.map((todo) => {
                    return <li className="flex items-center min-h-[32px]" key={todo.id}>
                    <input className="mr-3" type="checkbox" name="todo" checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)} id={`todo-${todo.id}`} />

                    <label className="mr-3 flex-1 " htmlFor={`todo-${todo.id}`}>
                        {
                            todo.completed === true ?
                            <del>{todo.task}</del>
                            :
                            <span>
                                {todo.task}
                            </span>
                        }
                    </label>
                    
                    <div className="w-[54px]">
                    {todo.completed && <button className="p-1 bg-red-600/55 " onClick={()=> handleDelete(todo.id)} type="button">Delete</button>} 
                    </div>
                </li>
                })
            }
        </ul>
    );
};

export default Todos;