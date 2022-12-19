import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Root from "./Root";
import Todo from "./Todo";
import Progress from "./Progress";
import Done from "./Done";
import Details from "./Details";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Root/>}/>
                <Route path={"/todo"} element={<Todo/>}/>
                <Route path={"/progress"} element={<Progress/>}/>
                <Route path={"/done"} element={<Done/>}/>
                <Route path={"/details/:id"} element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
