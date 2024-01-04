import "./style/General.css"
import "./style/Pix2VoxPage.css"

import NavBar from "./NavBar";

const Pix2VoxPage = () => {
    return (
        <div className="page">
            <NavBar />

            <div className="page-container">
                <div className="content">

                    {/* Summary Section */}
                    <div id="pix-header">
                        <h1> PIX2VOX </h1>
                        <h2> November 2022 </h2>
                        <h2> Python </h2>
                    </div>

                    <div class="pix-content">
                        <p>
                            The goal of this project was to implement the <span className="pix-link"><a href="https://github.com/hzxie/Pix2Vox" target="_none">Pix2Vox</a></span> code in TensorFlow (the original
                            code was written using PyTorch). Pix2Vox is a method that recovers 3D representations of objects from single and multi-view images.
                            In this project, I implemented the Pix2Vox-F version which includes the following:
                        </p>
                        <ul>
                            <li>
                                an encoder-decoder used to compute a set of features and recover the 3D shape of the object
                            </li>
                            <li>
                                a context aware fusion model to select high-quality reconstructions for each part of the object to later fuse together into the final result
                            </li>
                        </ul>
                    </div>

                    {/* Results Section */}
                    <div className="pix-bracket">
                        <h2>
                            RESULTS
                        </h2>
                    </div>
                    <div className="pix-content">
                        <div className="pix-result">
                            <div className="pix-single-figure">
                                <img src="../images/pix2vox/aeroplane_1.png" alt="aeroplane epoch 1" />
                                <p className="caption">Aeroplane Epoch 1</p>
                            </div>
                            <div className="pix-single-figure">
                                <img src="../images/pix2vox/aeroplane_5.png" alt="aeroplane epoch 5" />
                                <p className="caption">Aeroplane Epoch 5</p>
                            </div>
                            <div className="pix-single-figure">
                                <img src="../images/pix2vox/aeroplane_50.png" alt="aeroplane epoch 50" />
                                <p className="caption">Aeroplane Epoch 50</p>
                            </div>
                            <div className="pix-single-figure">
                                <img src="../images/pix2vox/aeroplane_100.png" alt="aeroplane epoch 100" />
                                <p className="caption">Aeroplane Epoch 100</p>
                            </div>
                        </div>

                        <div className="pix-result">
                            <div className="pix-single-figure">
                                <img src="../images/pix2vox/car_100.png" alt="car epoch 100" />
                                <p className="caption">Car Epoch 100</p>
                            </div>
                            <div className="pix-single-figure">
                                <img src="../images/pix2vox/bench_100.png" alt="bench epoch 100" />
                                <p className="caption">Bench Epoch 100</p>
                            </div>
                            <div className="pix-single-figure">
                                <img src="../images/pix2vox/lamp_100.png" alt="lamp epoch 100" />
                                <p className="caption">Lamp Epoch 100</p>
                            </div>
                            <div className="pix-single-figure">
                                <img src="../images/pix2vox/rifle_100.png" alt="rifle epoch 100" />
                                <p className="caption">Rifle Epoch 100</p>
                            </div>
                        </div>
                    </div>

                    {/* Takeaways Section */}
                    <div className="pix-bracket">
                        <h2>
                            TAKEAWAYS
                        </h2>
                    </div>
                    <div className="pix-content">
                        <p>
                            The biggest learning experiences and takeaways from the project:
                        </p>
                        <ul>
                            <li>
                                the nuances between the PyTorch and TensorFlow frameworks (and the importance of
                                thoroughly reading throught documentation)
                            </li>
                            <li>
                                the nuances between different version of libraries (the codes original visualization process
                                utilized an old version of Matplotlib resulted in an error in our visualization, so I decided
                                to search of a different method of visualizing binvox volumes)
                            </li>
                        </ul>
                        <p>
                            In the furture, I hope to continue working on this project in order to get the Pix2Vox-A version
                            functional (this version includes a refiner that corrects parts of the 3D volumes that were recovered
                            incorrectly) and to create data parsers for different data sets to expand upon the generalizability of
                            the model.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pix2VoxPage;