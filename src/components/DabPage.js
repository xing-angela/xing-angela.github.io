import "./style/General.css"
import "./style/DabPage.css"

import NavBar from "./NavBar";

const DabPage = () => {
    return (
        <div className="page">
            <NavBar />

            <div className="page-container">
                <div className="content">
                    {/* Summary Section */}
                    <div id="dab-header">
                        <h1> D@B </h1>
                        <h2> April 2022 </h2>
                        <h2> Java/React </h2>
                    </div>

                    <div className="dab-content">
                        <p>
                            D@B (Dorms at Brown) was developed as a final project for Introduction to Software
                            Engineering.
                        </p>
                        <p>
                            In previous years, there has been a lack of information regarding housing around campus, making it
                            difficult to choose dorms and form groups during the housing process. Students
                            in the past created <span className="dab-link"><a href="https://brownbeardens.com/" target="_none">Brown Bear Dens</a></span> in order to provide some information about the dorms including a list of rooms and floor
                            plans for each dorm. While this site has been helpful, it lacks key information such as images,
                            characteristics of dorms, opinions of students, etc.
                        </p>
                        <p>
                            To address this, my group and I created D@B. This site incorporates the previously mentioned
                            information and more into the following features:
                            <ul>
                                <li>
                                    User authentication/login in order to verify that users are Brown University students
                                </li>
                                <li>
                                    A user profile that contains user information and reviews written
                                </li>
                                <li>
                                    Filtering based on specific attributes of dorms
                                </li>
                                <li>
                                    A dorm profile that contains information about each dorm and ability to view and write
                                    reviews for each dorm
                                </li>
                                <li>
                                    A survey that recommends dorms based on the user's preferences
                                </li>
                            </ul>
                        </p>

                        <p>
                            During the project, I focused on implementing the dorm filtering. This process required
                            collecting filter information from users to send a post request to the backend, gather data
                            from the database to filter, and update the page based on the filtered data.
                        </p>
                    </div>

                    {/* Results */}
                    <div className="dab-bracket">
                        <h2>
                            RESULTS
                        </h2>
                    </div>

                    <div className="dab-content">
                        <div className="dab-result">
                            <div className="dab-single-figure">
                                <img src="../images/dab/filters1.png" alt="filters 1" />
                                <p className="caption">Room Filters</p>
                            </div>
                            <div className="dab-single-figure">
                                <img src="../images/dab/filters2.png" alt="filters 2" />
                                <p className="caption">Bathroom and Kitchen Filters</p>
                            </div>
                            <div className="dab-single-figure">
                                <img src="../images/dab/filters3.png" alt="filters 3" />
                                <p className="caption">Location and Year Filters</p>
                            </div>
                            <div className="dab-single-figure">
                                <img src="../images/dab/filters4.png" alt="filters 4" />
                                <p className="caption">Other Filters</p>
                            </div>
                        </div>

                        <div className="dab-result">
                            <img id="filter-gif" src="../images/dab/filter.gif" alt="filter gif" />
                        </div>
                    </div>

                    {/* Takeaways */}
                    <div className="dab-bracket">
                        <h2>
                            TAKEAWAYS
                        </h2>
                    </div>
                    <div className="dab-content">
                        <p>
                            The biggest learning experiences and takeaways from the project:
                        </p>
                        <ul>
                            <li>
                                the importance of user testing (once we had people review the site and provide
                                suggestions, we found some bugs and gain some insight into what other people
                                found helpful/what we could add to improve)
                            </li>
                            <li>
                                the importance of keeping well organized code for others to work with (along the way
                                we had to merge our different components together which almost always resulted in
                                merge conflicts which were not easy to resolve since one of the branches was usually
                                behind a different branch for certain components)
                            </li>
                        </ul>
                        <p>
                            Through this project, I became more comfortable with using React (and using hooks
                            in React) and learned a lot about working on larger projects with more people. Towards the
                            end of the project, our group had some trouble deploying the project, so in the future, we
                            would like to get the site up and running for others to use.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DabPage;