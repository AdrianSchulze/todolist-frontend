import {useParams} from "react-router-dom";
import useTodos from "./Hooks/useTodos";
import {useNavigate} from "react-router-dom";
import Nav from "./Components/Nav";

export default function Details() {

    const {id} = useParams<{ id: string }>();
    const todos = useTodos();
    const foundTodo = todos.find(todo => todo.id === id)

    let navigate = useNavigate();

    return (
        <div className={"container"}>
            <Nav/>
            <div>
                {foundTodo
                    ? <h2>{foundTodo.description}</h2>
                    : <div>Character not found</div>}
                {foundTodo
                    ? <h4>Status: {foundTodo.status}</h4>
                    : <div>Status not found</div>}
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )


}