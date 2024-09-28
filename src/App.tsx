import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";


const App = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen space-y-5">
      <h1>TypeScript + React: TodoAPP</h1>
      <Navbar/>
      <AddTodo/>
      <div className="my-10">
        <Todos/>
      </div>
    </main>
  );
};

export default App;