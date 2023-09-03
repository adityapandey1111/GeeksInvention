import React from "react";
import logo from "./IMAGES/LOGO/geeks-logo-white.svg";
import $ from 'jquery';

const Navbar = () => {
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    return(
        <div>
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#chandana-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand menus" href="#">
                        <img src={logo} className="logo"></img>
                    </a>
                </div>
        
                <div className="collapse navbar-collapse" id="chandana-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="page-scroll"><a href="#">HOME</a></li>
                        <li className="page-scroll"><a href="#">WORKS</a></li>
                        <li className="page-scroll"><a href="#">TECHNOLOGIES</a></li>
                        <li className="page-scroll"><a href="#">SERVICES</a></li>
                        <li className="page-scroll"><a href="#">COMPANY</a></li>
                        <li className="page-scroll"><a href="#">CONTACTS</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;