import "./style/General.css"
import "./style/NerfPage.css"

import NavBar from "./NavBar";

const NerfPage = () => {
    return (
        <div className="page">
            <NavBar />

            <div className="page-container">
                <div className="content">
                    {/* Summary Section */}
                    <div id="nerf-header">
                        <h1> NERF 101 </h1>
                        <h2> July-September 2022 </h2>
                        <h2> Python </h2>
                    </div>

                    <div className="nerf-content">
                        <p>
                            Throughout the Summer of 2022, my collegue and I worked on training <span className="nerf-link"><a href="https://github.com/bmild/nerf" target="_none">NeRF</a></span> (neural radiance field)
                            models on Blender simulated data. The goal of the Blender data was to model the camera capture system our <span className="nerf-link"><a href="https://ivl.cs.brown.edu/" target="_none">lab</a></span> was
                            building. The capture system (named BRICS) consisted of 53 cameras that captured objects (and hands) in 360 degrees. The end goal is to create NeRF models of objects (and hands) captured in 360 degrees.
                        </p>
                        <p>
                            <span className="nerf-link"><a href="https://github.com/xing-angela/nerf101" target="_none">NeRF 101</a></span> is the detailed documentation of how we ran NeRF, any
                            issues we encountered along the way, and the code we used to generate the spiral camera flythrough of the scene.
                        </p>
                    </div>

                    {/* Results */}
                    <div className="nerf-bracket">
                        <h2>
                            RESULTS
                        </h2>
                    </div>
                    <div className="nerf-result">
                        <img src="../images/nerf101/nerf-hand.gif" />
                        <img src="../images/nerf101/nerf-burger.gif" />
                    </div>

                    {/* Takeaways */}
                    <div className="nerf-bracket">
                        <h2>
                            TAKEAWAYS
                        </h2>
                    </div>

                    <div className="nerf-content">
                        <p>
                            The biggest learning experiences and takeaways from the project:
                        </p>
                        <ul>
                            <li>
                                computing using GPU clusters (this was my first time training on a GPU)
                            </li>
                            <li>
                                the importance of documentation (errors we encountered along the way were almost always errors other people
                                also encountered)
                            </li>
                        </ul>
                        <p>
                            In the future, we are looking at generating NeRF models using the real-life data taken
                            from our camera capture system.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NerfPage;