import todos from "../../data/todos.json";
const removeTask = (index) => {
    todos.tasks.splice(index, 1);
    // Aquí puedes guardar los cambios en todos.json si es necesario
    console.log(todos.tasks[index]);

    //borrar datos del localstorage
    localStorage.setItem('todos', JSON.stringify(todos));
};

const RemoveTask = ({ index }) => {
    return (
        <button className="text-red-500 ml-5" onClick={() => removeTask(index)}>Borrar</button>
    );
};

export default RemoveTask;
