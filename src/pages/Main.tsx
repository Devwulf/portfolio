import React from "react";
import Contact from "../components/Contact";
import OnePageScroller from "../components/OnePageScroller";
import Project from "../components/Project";
import ScrollerChild from "../components/ScrollerChild";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";

type MainProps = {
    id?: string;
}

type MainState = {

}

export default function Main(props: MainProps) {
    const { id } = props;

    return (
        <div className="main2">
            <OnePageScroller goToId={id} showNavigator={true}>
                <ScrollerChild id="welcome" label="Welcome" height="full">
                    <Welcome />
                </ScrollerChild>
                <ScrollerChild id="project1" label="Project 1" height={40}>
                    <Project isFlipped={false} />
                </ScrollerChild>
                <ScrollerChild id="project2" label="Project 2" height={40}>
                    <Project isFlipped={true} />
                </ScrollerChild>
                <ScrollerChild id="project3" label="Project 3" height={40}>
                    <Project isFlipped={false} />
                </ScrollerChild>
                <ScrollerChild id="project4" label="Project 4" height={40}>
                    <Project isFlipped={true} />
                </ScrollerChild>
                <ScrollerChild id="skills" label="Skills" height={48}>
                    <Skills />
                </ScrollerChild>
                <ScrollerChild id="contact" label="Contact" height={32}>
                    <Contact />
                </ScrollerChild>
            </OnePageScroller>
        </div>
    );
}