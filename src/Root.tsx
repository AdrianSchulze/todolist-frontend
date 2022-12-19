import {SetStateAction, useState} from "react";
import axios from "axios";
import Nav from "./Components/Nav";
import Todo from "./Todo";
import Progress from "./Progress";
import Done from "./Done";


export default function Root() {
    const [message, setMessage] = useState('');

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setMessage(e.target.value);
    };

    const addTodo = (description: string) => {
        const newTodo = {
            description: description,
            status: "OPEN"
        }
        axios.post("/api/todo", newTodo)
            .then(response => response.data)
            .catch(e => console.error(e));
    }

    return (
        <div className={"container"}>
            <Nav/>
            <section className={"todo-container"}>
                <Todo/>
                <Progress/>
                <Done/>
            </section>
            <footer className={"addNewTodo-container"}>
                <input type="text" name="message" onChange={handleChange} value={message}/>
                <button onClick={() => addTodo(message)}>Add Todo</button>
            </footer>
        </div>
    );
}