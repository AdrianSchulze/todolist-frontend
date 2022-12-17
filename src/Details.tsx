import {Link, useParams} from "react-router-dom";
import useTodos from "./useTodos";
import {useNavigate} from "react-router-dom";

export default function Details() {

    const {id} = useParams<{ id: string }>();
    const todos = useTodos();
    const foundTodo = todos.find(todo => todo.id === id)

    let navigate = useNavigate();

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
            <div>
            {foundTodo
                ? <h2>{foundTodo.description}</h2>
                : <div>Character not found</div>}
            <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )


}