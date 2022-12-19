import axios from "axios";
import {useEffect, useState} from "react";

export enum Status {
    OPEN,
    IN_PROGRESS,
    DONE
}

export type Todo = {
    id: string;
    description: string;
    status: Status;
}

export default function useTodos() {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect( () => {
        axios.get("/api/todo")
            .then(response => setTodos(response.data))
            .catch(e => console.error(e));
    },[])
    console.log(todos);

    return todos;

}