import React from "react";
import fintech from './IMAGES/CUSTOMER/industry-fintech.svg';

const Worklist = () => {

    return(
        <div className="works-list" id="section2">

                    {/* <!-- Fintech Solution --> */}
                    <div className="works-list__item purple">
                        <div className="works-list__item__w clearfix">
                            <div className="img-block">
                                <div className="img-w">
                                    <img alt="Brilliant Move" src={fintech} />
                                </div>
                            </div>

                            <div className="text__w">
                                <div className="text">
                                <h3 className="mb-1">Fintech Solution</h3>

                                    <p className="subtitle">Transforming Fintech with AI</p>

                                    <div className="tags">
                                        <span>Fraud detection</span>
                                        <span>Transaction categorisation</span>
                                        <span>Risk Scoring</span>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets
                                        </p>
                                    </div>
                                    <a className="btnn btn_white" rel="nofollow" href="#">
                                        <span>See full case study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Industrial IoT --> */}
                    <div className="works-list__item azure">
                        <div className="works-list__item__w clearfix">
                            <div className="img-block">
                                <div className="img-w">
                                    <img alt="IoT" src={require('./IMAGES/CUSTOMER/industry-iot.webp')} />
                                </div>
                            </div>
                            <div className="text__w">
                                <div className="text">
                                    <h3>Industrial IoT</h3>
                                    <p className="subtitle">Providing a better connected experience</p>
                                    <div className="tags">
                                        <span>Connected manufacturing</span>
                                        <span>Aviation</span>
                                        <span>Smart Building</span>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.
                                        </p>
                                    </div>
                                    <a className="btnn btn_white" rel="nofollow" href="#">
                                        <span>See full case study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Smart Education --> */}
                    <div className="works-list__item black">
                        <div className="works-list__item__w clearfix">
                            <div className="img-block">
                                <div className="img-w">
                                    <img alt="Connect Home" src={require('./IMAGES/CUSTOMER/industry-education.webp')} />
                                </div>
                            </div>
                            <div className="text__w">
                                <div className="text">
                                <h3 className="mb-1">Smart Education</h3>
                                    <p className="subtitle">Elevate your Education Institution</p>
                                    <div className="tags">
                                        <span>Learning Management</span>
                                        <span>Course offering</span>
                                        <span>Professional Training</span>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Elevate your education institution with our comprehensive software solutions. Learning management, course offerings, professional training, certification, and school management tools to streamline your operations and enhance your students' learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in the ever-evolving education industry.
                                        </p>
                                    </div>
                                    <a className="btnn btn_white" rel="nofollow" href="#">
                                        <span>See full case study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    )
}

export default Worklist;