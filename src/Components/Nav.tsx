import {Link} from "react-router-dom";

export default function Nav() {

    return (
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
    );
}