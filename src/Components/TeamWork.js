import React from "react";
import deep from './IMAGES/ICONS/deep.svg';
import pc from './IMAGES/ICONS/pc.svg';
import reg from './IMAGES/ICONS/reg.svg';
import scale from './IMAGES/ICONS/scale.svg';
import time from './IMAGES/ICONS/time.svg';
import agile from './IMAGES/ICONS/agile.svg';

const TeamWork = () => {

    return(

        <div className="dedicated-teams" id="section6">
                    <div className="dt-header">
                        <div className="dt-title">
                            <h2>Only dedicated teams</h2>
                        </div>

                        <div className="dt-text">
                            <p>
                                Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.
                            </p>
                        </div>
                    </div>

                    <ul className="dt-features">
                        <li className="feature-item">
                            <div className="img">
                                <img src={agile} alt="" />
                            </div>

                            <span className="title">Agile approach</span>
                        </li>

                        <li className="feature-item">
                            <div className="img">
                                <img src={deep} alt="" />
                            </div>

                            <span className="title">Deep tech expertise</span>
                        </li>

                        <li className="feature-item">
                            <div className="img">
                                <img src={pc} alt="" />
                            </div>

                            <span className="title">Personal commitment</span>
                        </li>
                    </ul>

                    <ul className="dt-features">
                        <li className="feature-item">
                            <div className="img">
                                <img src={reg} alt="" />
                            </div>

                            <span className="title">Regular reporting</span>
                        </li>

                        <li className="feature-item">
                            <div className="img">
                                <img src={time} alt="" />
                            </div>

                            <span className="title">Time tracking</span>
                        </li>

                        <li className="feature-item">
                            <div className="img">
                                <img src={scale} alt="" />
                            </div>

                            <span className="title">Scalability</span>
                        </li>
                    </ul>

                    <div className="more-tech">
                        <a className="btnn btn_orange" href="#">
                            <span>See our services</span>
                        </a>
                    </div>

                </div>
    )
}

export default TeamWork;