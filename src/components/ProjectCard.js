import "./style/ProjectCard.css"

import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
    const proj_name = item.name
    const id = item.id
    const img = item.img
    const date = item.date
    const link = item.link
    const tags = item.tags
    const description = item.description

    return (
        <div className="project" id={id}>
            <Link className="project-link" to={link}>
                <img src={img} />
                <h2>{proj_name}</h2>
                <h3>{date}</h3>
                <div className="tags">
                    {tags.map((item) => (
                        <div>
                            {item}
                        </div>
                    ))}
                </div>
                <p>{description}</p>
            </Link>
        </div>
    )
}

export default ProjectCard;