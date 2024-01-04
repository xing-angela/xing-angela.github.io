import "./style/General.css"
import "./style/HomePage.css"

import React from 'react';

import NavBar from "./NavBar";

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const HomePage = () => {

    const onHover = (e) => {
        e.currentTarget.src = "./images/profile/drawn_profile.png"
    }

    const onRemove = (e) => {
        e.currentTarget.src = "./images/profile/profile.jpg"
    }

    return (
        <div className="page">
            <NavBar />
            <div className="page-container">
                <div id="profile-container">
                    <img src={"./images/profile/profile.jpg"}
                        onMouseOver={(e) => onHover(e)}
                        onMouseOut={(e) => onRemove(e)} />
                </div>

                <div id="about-container">
                    <h2 id="intro">
                        WELCOME! I'M ANGELA :)
                    </h2>

                    <p id="about-section">
                        I'm a junior studying Computer Science at Brown University, and I'm
                        interested in 3D computer vision and graphics!
                        <br></br>
                        <br></br>
                        I'm currently working on 3D reconstruction research at <br></br>
                        <span className="home-link">
                            <a href="https://ivl.cs.brown.edu/" target="_blank">Brown
                                Interactive 3D Vision and Learning Lab
                            </a>
                        </span>.
                        <br></br>
                        <br></br>
                        I'm also a varsity athlete on the <span className="home-link"> <a href="https://brownbears.com/sports/womens-gymnastics/roster/angela-xing/15965" target="_blank">Brown Women's Gymnastics</a></span> team.
                        When I'm not coding or at the gym, I'm probably sewing, crocheting, or grabbing boba :)
                    </p>

                    <div id="socials">
                        <a className="socials-link" href="https://github.com/xing-angela" target="_blank">
                            <FiGithub size={40} />
                        </a>
                        <a className="socials-link" href="https://www.linkedin.com/in/angela-xing-a0954a1b3/" target="_blank">
                            <FaLinkedinIn size={40} />
                        </a>
                        <a className="socials-link" href="mailto:ajeixing@gmail.com" target="_blank">
                            <HiOutlineMail size={40} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;