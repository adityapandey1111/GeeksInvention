import React from "react";
import logo from "./IMAGES/LOGO/geeks-logo-white.svg";

const Footer = () => {
  return (
    <footer id="section8">
        <div className="info better section-ready-to-contact">
            <div className="info__w">
                <div className="info__i">
                    <div className="info__title">
                        <h2>Get to know us better!</h2>
                    </div>

                    <div className="info__text">
                        <p>
                            It is a pleasure to have you on our website. Let us know if
                            there's an opportunity to do something together.
                        </p>
                    </div>

                    <a className="btnn btn_full-orange" href="#">
                        Drop us a message
                    </a>
                </div>
            </div>
        </div>

        <div className="footer-top clearfix">
            <div className="footer-logo">
                <a rel="nofollow" href="index.html">
                    <img src={logo} alt="" />
                </a>
                <p className="footDes">
                    447 Broadway, 2nd Floor Suite #772, <br/>New York 10013, United States
                    <br /> +1-347-535-0004
                </p>
            </div>

            <a rel="nofollow" href="#" className="btnn btn_white subscription-dialog" data-toggle="modal" data-target="#subscribeModal" data-backdrop="static">
                Stay tuned for our updates
            </a>
        </div>

        <div className="footer-bottom">
            <p>© Copyright 2023. All Rights Reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
