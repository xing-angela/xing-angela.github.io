import "./style/General.css"
import "./style/VoxelPage.css"

import NavBar from "./NavBar";

const VoxelPage = () => {
    return (
        <div className="page">
            <NavBar />

            <div className="page-container">
                <div className="content">
                    {/* Summary Section */}
                    <div id="voxel-header">
                        <h1> VOXEL CARVING </h1>
                        <h2> June 2022 </h2>
                        <h2> Python </h2>
                    </div>

                    <div className="voxel-content">
                        <p>
                            Voxel Carving is a project I worked on in the beginning of Summer 2022. I decided to try this
                            project because I worked on 3D reconstruction for my final project in Computer Vision and
                            wanted to expand a bit more. For that final project, my group and I used depth cameras (the Kinect V2
                            and the iPhone depth camera) in order to reconstruct ourselves and our professor. To learn a
                            bit more on this topic, I decided to try out a different technique which lead me to voxel
                            carving. I implemented voxel carving in the following manner:
                        </p>
                        <ul>
                            <li>
                                extracting silhouettes of images
                            </li>
                            <li>
                                calculating projection matrices for each camera/image
                            </li>
                            <li>
                                generating the initial voxel grid
                            </li>
                            <li>
                                carving -- for each voxel, calculated the corresponding image pixel, so if the pixel lies in the silhouette
                                it's included in the final reconstruction, otherwise it's excluded
                            </li>
                        </ul>
                    </div>

                    {/* Results Section */}
                    <div className="voxel-bracket">
                        <h2>
                            RESULTS
                        </h2>
                    </div>
                    <div className="voxel-content">
                        <div className="voxel-result">
                            <img src="../images/voxel/dino1.jpg" alt="dino 1" />
                            <img src="../images/voxel/dino2.jpg" alt="dino 2" />
                            <img src="../images/voxel/dino3.jpg" alt="dino 3" />
                        </div>

                        <div className="voxel-result">
                            <img src="../images/voxel/temple1.jpg" alt="temple 1" />
                            <img src="../images/voxel/temple2.jpg" alt="temple 2" />
                            <img src="../images/voxel/temple3.jpg" alt="temple 3" />
                        </div>
                    </div>

                    {/* Takeaways Section */}
                    <div className="voxel-bracket">
                        <h2>
                            TAKEAWAYS
                        </h2>
                    </div>
                    <div className="voxel-content">
                        <p>
                            The biggest learning experiences and takeaways from the project:
                        </p>
                        <ul>
                            <li>
                                the importance of utilizing numpy operations (rather than looping) to increase
                                processing speed
                            </li>
                            <li>
                                when reading files from a folder, they do not get read in order (instead, read the
                                files and sort them)
                            </li>
                        </ul>
                        <p>
                            Overall, I really enjoyed learning about new methods for reconstruction. This project
                            helped me gain a deeper understanding of camera geometry and how to use these concepts
                            in reconstruction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VoxelPage;