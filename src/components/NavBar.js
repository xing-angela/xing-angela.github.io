import "./style/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header>
                <h2>
                    <Link className="nav-individual-link" id="title" to="/">
                        ANGELA XING
                    </Link>
                </h2>
                <nav id="nav-bar">
                    <Link className="nav-individual-link" to="/">
                        HOME
                    </Link>
                    <Link className="nav-individual-link" to="/research">
                        RESEARCH
                    </Link>
                    <Link className="nav-individual-link" to="/projects">
                        PROJECTS
                    </Link>
                    <Link className="nav-individual-link" to="/gymnastics">
                        GYMNASTICS
                    </Link>
                    <a className="nav-individual-link" href="../xing_cv.pdf" target="_none">
                        CV
                    </a>
                </nav>
            </header>
        </>
    )

}

export default NavBar;