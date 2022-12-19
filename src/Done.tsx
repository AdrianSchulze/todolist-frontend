import useTodos from "./Hooks/useTodos";
import {Link} from "react-router-dom";
import axios from "axios";

function deleteTodo(todoid: String) {
    axios.delete(`/api/todo/${todoid}`)
        .then(response => response.data)
        .catch(e => console.error(e));
    window.location.reload();
}

export default function Done() {
    const todos = useTodos();

    return (
            <div className={"todo-card-container"}>
                <h2 className={"todo-headline"}>Done</h2>
                {!todos ? "No data" : todos.filter(todo => todo.status.toString().includes("DONE")).map(todo =>
                    <section className={"todo-card"}>
                        <h4>{todo.description}</h4>
                        <section className={"todo-card-bottom"}>
                            <Link to={"/details/" + todo.id}>Details</Link>
                            <Link to={"/edit/"}>Edit</Link>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </section>
                    </section>
                )}
            </div>
    )
}