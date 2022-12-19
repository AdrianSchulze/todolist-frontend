import useTodos from "./Hooks/useTodos";
import {Link} from "react-router-dom";

export default function Todo() {
    const todos = useTodos();

    return (
            <div className={"todo-card-container"}>
                <h2 className={"todo-headline"}>Todo</h2>
                {!todos ? "No data" : todos.filter(todo => todo.status.toString().includes("OPEN")).map(todo =>
                    <section className={"todo-card"}>
                        <h4>{todo.description}</h4>
                        <section className={"todo-card-bottom"}>
                            <Link to={"/details/" + todo.id}>Details</Link>
                            <Link to={"/edit/"}>Edit</Link>
                            <button>Advance</button>
                        </section>
                    </section>
                )}
            </div>
    )
}