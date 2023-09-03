import React from "react";
import web from './IMAGES/ICONS/web.svg';
import ios from './IMAGES/ICONS/ios.svg';
import android from './IMAGES/ICONS/android.svg';
import hybrid from './IMAGES/ICONS/hybrid.svg'
import tv from './IMAGES/ICONS/tv.svg';
import wear from './IMAGES/ICONS/wear.svg';

const TechStacks = () => {

    return(

        <div className="software-platforms" id="section5">
                    <div className="platforms-header">
                        <div className="platforms-title">
                            <h2>Software for modern platforms</h2>
                        </div>

                        <div className="platforms-text">
                            <p>We develop applications for mobile, web, wearables, and TV.</p>
                        </div>
                    </div>

                    <div className="platforms-list">
                        <div className="group">
                            <div className="list-item">
                                <div className="img">
                                    <img src={web} alt="" />
                                </div>

                                <span className="title">Web</span>
                            </div>

                            <div className="list-item">
                                <div className="img">
                                    <img src={ios} alt="" />
                                </div>

                                <span className="title">iOS</span>
                            </div>
                        </div>

                        <div className="group">
                            <div className="list-item">
                                <div className="img">
                                    <img src={android} alt="" />
                                </div>

                                <span className="title">Android</span>
                            </div>

                            <div className="list-item">
                                <div className="img">
                                    <img src={hybrid} alt="" />
                                </div>

                                <span className="title">Hybrid</span>
                            </div>
                        </div>

                        <div className="group">
                            <div className="list-item">
                                <div className="img">
                                    <img src={wear} alt="" />
                                </div>

                                <span className="title">Wearables</span>
                            </div>

                            <div className="list-item">
                                <div className="img">
                                    <img src={tv} alt="" />
                                </div>

                                <span className="title">TV</span>
                            </div>
                        </div>
                    </div>

                    <div className="more-tech">
                        <a className="btnn btn_orange" href="#">
                            <span>See our tech stack</span>
                        </a>
                    </div>

                </div>
    )
}

export default TechStacks;