import React from "react";
import home from "./IMAGES/HOMEBACK/G.png";

const Home = () => {

    return (
        <div className="Home" id="section1">
            <img src={home} className="zoom-out-image" alt="Home Image"></img>
            <div className="paste">
                <h1 className="name">EMBRACE THE FUTURE</h1>
                <p className="welcome">Welcome to the Age of Action</p>
            </div>
        </div>
    )
}

export default Home;