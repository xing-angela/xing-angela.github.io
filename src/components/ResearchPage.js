import "./style/General.css"

import NavBar from "./NavBar";
import ResearchCard from "./ResearchCard";

const ResearchPage = () => {
    const researchProjects = require("../research.json")

    return (
        <div className="page">
            <NavBar />
            <div className="page-container">
                {researchProjects.map((item) => (
                    <ResearchCard item={item} />
                ))}
            </div>
        </div>
    )
}

export default ResearchPage;