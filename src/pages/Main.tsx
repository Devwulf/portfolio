import React from "react";
import Contact from "../components/Contact";
import OnePageScroller from "../components/OnePageScroller";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";

type MainProps = {
    id?: string;
}

type MainState = {

}

export default function Main(props: MainProps) {
    const { id } = props;
    console.log(id);
    
    return (
        <div className="main2">
            <OnePageScroller goToId={id}>
                <div id="welcome" className="w-screen h-screen">
                    <Welcome />
                </div>
                <div id="project1" className="w-screen bg-gray-200" style={{height: "40rem"}}>
                    <Project isFlipped={false} />
                </div>
                <div id="project2" className="w-screen bg-gray-300" style={{height: "40rem"}}>
                    <Project isFlipped={true} />
                </div>
                <div id="project3" className="w-screen bg-gray-400" style={{height: "40rem"}}>
                    <Project isFlipped={false} />
                </div>
                <div id="project4" className="w-screen bg-gray-500" style={{height: "40rem"}}>
                    <Project isFlipped={true} />
                </div>
                <div id="skills" className="w-screen" style={{height: "48rem"}}>
                    <Skills />
                </div>
                <div id="contact" className="w-screen" style={{height: "32rem"}}>
                    <Contact />
                </div>
            </OnePageScroller>
        </div>
    );
}