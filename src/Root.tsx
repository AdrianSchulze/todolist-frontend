import {Link} from "react-router-dom";
import useTodos, {Status, Todo} from "./useTodos";
import {FormEvent, useState} from "react";
import axios from "axios";


export default function Root() {
    const todos = useTodos();

    const [message, setMessage] = useState<Todo>();

    const createPost = (event: FormEvent<HTMLFormElement>) => {

        const formData : Todo = {
            id: "",
            description: message?.description,
            status: Status.OPEN
        }

        axios.post("/api/todo", formData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

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

            <section className={"todo-container"}>
                <div className={"todo-card-container"}>
                    <h2 className={"todo-headline"}>Todo</h2>
                    {!todos ? "No data" : todos.filter(todo => todo.status.toString().includes("OPEN")).map(todo =>
                        <section className={"todo-card"}>
                            <h4 key={todo.id}>{todo.description}</h4>
                            <section className={"todo-card-bottom"}>
                                <Link to={"/details/" + todo.id}>Details</Link>
                                <Link to={"/edit/"}>Edit</Link>
                                <button>Advance</button>
                            </section>
                        </section>
                    )}
                </div>
                <div className={"todo-card-container"}>
                    <h2 className={"todo-headline"}>In Progress</h2>
                    {!todos ? "No data" : todos.filter(todo => todo.status.toString().includes("IN_PROGRESS")).map(todo =>
                        <section className={"todo-card"}>
                            <h4 key={todo.id}>{todo.description}</h4>
                            <section className={"todo-card-bottom"}>
                                <Link to={"/details/" + todo.id}>Details</Link>
                                <Link to={"/edit/"}>Edit</Link>
                                <button>Advance</button>
                            </section>
                        </section>
                    )}
                </div>
                <div className={"todo-card-container"}>
                    <h2 className={"todo-headline"}>Done</h2>
                    {!todos ? "No data" : todos.filter(todo => todo.status.toString().includes("DONE")).map(todo =>
                        <section className={"todo-card"}>
                            <h4 key={todo.id}>{todo.description}</h4>
                            <section className={"todo-card-bottom"}>
                                <Link to={"/details/" + todo.id}>Details</Link>
                                <Link to={"/edit/"}>Edit</Link>
                                <button>Advance</button>
                            </section>
                        </section>
                    )}
                </div>
            </section>


            <footer className={"addNewTodo-container"}>
                <form onSubmit={createPost}>
                    <input type="text" id="message" value={message?.description}/>
                    <button>Click me</button>
                </form>
            </footer>
        </div>
    );
}