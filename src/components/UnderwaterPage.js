import "./style/General.css"
import "./style/UnderwaterPage.css"

import NavBar from "./NavBar";

const UnderwaterPage = () => {
    return (
        <div className="page">
            <NavBar />

            <div className="page-container">
                <div className="content">

                    {/* Summary Section */}
                    <div id="underwater-header">
                        <h1> UNDER THE SEA </h1>
                        <h2> December 2021 </h2>
                        <h2> C++ </h2>
                    </div>

                    <div className="underwater-content">
                        <p>
                            Under the Sea was developed as a final project for Introduction to Computer Graphics.
                        </p>

                        <p>
                            The goal of this project was to create a 3D scene incorporating various computer graphics
                            concepts into the different features. My group and I picked concepts that we wanted to learn
                            more about and structured our theme around those concepts. In the end, we decided on an underwater
                            scene with the following features:
                        </p>
                        <ul>
                            <li>
                                Camera movement through a 3D scene along Bezier Curves
                            </li>
                            <li>
                                Corals generated using fractals/L-systems
                            </li>
                            <li>
                                Procedurally generated terrain
                            </li>
                        </ul>
                        <p>
                            During the project, I focused on implementing camera movement and helped debug generating
                            the corals (L-systems and fractals).
                        </p>
                    </div>

                    {/* Results Section */}
                    <div className="underwater-bracket">
                        <h2>
                            RESULTS
                        </h2>
                    </div>
                    <div className="underwater-content">
                        <div className="underwater-result">
                            <div class="underwater-single-figure">
                                <img src="../images/underwater/underwater_through.gif" alt="camera through scene" />
                                <p class="caption">Camera Movement Through Scene</p>
                            </div>
                            <div class="underwater-single-figure">
                                <img src="../images/underwater/underwater_above.gif" alt="camera above scene" />
                                <p class="caption">Camera Movement Above Scene</p>
                            </div>
                        </div>
                    </div>

                    {/* Takeaways Section */}
                    <div className="underwater-bracket">
                        <h2>
                            TAKEAWAYS
                        </h2>
                    </div>
                    <div className="underwater-content">
                        <p>
                            The biggest learning experiences and takeaways from the project:
                        </p>
                        <ul>
                            <li>
                                the importance of using the debugger (the biggest challenge with this project
                                was the corals/L-systems, but using the debugger was extremely helpful in
                                seeing where we went wrong with the recursion)
                            </li>
                            <li>
                                the imporance of code design and sturcture (in creating the Bezier camera movement,
                                I took a lot of time thinking about how to best structure the code in order to
                                minimize repititon -- creating a Bezier curve class and a Piecewise Bezier class that
                                contains the Bezier curve class)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderwaterPage;