import useTodos from "./useTodos";
import {Link} from "react-router-dom";

export default function Progress() {
    const todos = useTodos();

    return (
        <div className={"container"}>
            <nav className={"nav-container"}>
                <Link to={"/"}
                      style={{textDecoration: 'none black'}}>Home</Link>
                <Link to={"/todo"}
                      style={{textDecoration: 'none black'}}>Todo</Link>
                <Link to={"/progress"} style={{textDecoration: 'none black'}}>In
                    Progress</Link>
                <Link to={"/done"}
                      style={{textDecoration: 'none black'}}>Done</Link>
            </nav>
            <div className={"todo-card-container"}>
                <h2 className={"todo-headline"}>In Progress</h2>
                {!todos ? "No data" : todos.filter(todo => todo.status.toString().includes("IN_PROGRESS")).map(todo =>
                    <section className={"todo-card"}>
                        <h4>{todo.description}</h4>
                        <section className={"todo-card-bottom"}>
                            <Link to={"/details/" + todo.id} >Details</Link>
                            <Link to={"/edit/"} >Edit</Link>
                            <button>Advance</button>
                        </section>
                    </section>
                )}
            </div>
        </div>
    )
}