import "./style/General.css"

import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
    const projects = require("./../projects.json")

    return (
        <div className="page">
            <NavBar />
            <div className="page-container">
                {projects.map((item) => (
                    <ProjectCard item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage;