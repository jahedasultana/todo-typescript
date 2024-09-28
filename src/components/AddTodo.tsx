import { FormEvent, useState } from "react";
import { useTodos } from "../AuthProvider/AuthProvider";

const AddTodo = () => {
    const [todo,setTodo] = useState('')
    const {handleAddTodo} = useTodos()

    const handleTodo = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddTodo(todo)
        setTodo('')
    }

    return (
        <div>
            <form onSubmit={handleTodo}>
                <input className="p-2 outline-none border" type="text" name="text" id="text" placeholder="add todo" value={todo} onChange={(e)=> setTodo(e.target.value)} />
                <button className="p-2 bg-violet-600 text-white font-bold" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddTodo;