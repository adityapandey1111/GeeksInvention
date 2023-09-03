import React from "react";
import Worklist from "./Worklist";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import TechStacks from "./Techstack";
import TeamWork from "./TeamWork";
import Home from "./Home";
import Navbar from "./Navbar";
import Loader from './Loader';

const Contents = () => {

    return(
        <div className="main">
            <Loader/>
            <section className="wrapper" id="wrapper">
                <Navbar/>
                <Home/>
                <Worklist/>
                <Portfolio/>
                <Testimonials/>
                <TechStacks/>                
                <TeamWork/>   
            </section>
        </div>
    )
}

export default Contents;