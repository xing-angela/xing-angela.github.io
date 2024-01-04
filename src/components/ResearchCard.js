import "./style/ResearchCard.css"

import { Link } from "react-router-dom";

const ResearchCard = ({ item }) => {
    const proj_name = item.name
    const id = item.id
    const img = item.img
    const link = item.link
    const conf = item.conf

    return (
        <div className="research" id={id}>
            <a className="research-link" href={link} target="_blank">
                <img src={img} />
                <h2>{proj_name}</h2>
                <div className="conf">
                    <div>{conf}</div>
                </div>
            </a>
        </div>
    )
}

export default ResearchCard;