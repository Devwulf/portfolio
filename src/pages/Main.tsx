import React from "react";
import Contact from "../components/Contact";
import OnePageScroller from "../components/OnePageScroller";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";

type MainProps = {

}

type MainState = {

}

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="main2">
                <OnePageScroller>
                    <div className="w-screen h-screen">
                        <Welcome />
                    </div>
                    <div className="w-screen bg-gray-200" style={{height: "40rem"}}>
                        <Project isFlipped={false} />
                    </div>
                    <div className="w-screen bg-gray-300" style={{height: "40rem"}}>
                        <Project isFlipped={true} />
                    </div>
                    <div className="w-screen bg-gray-400" style={{height: "40rem"}}>
                        <Project isFlipped={false} />
                    </div>
                    <div className="w-screen bg-gray-500" style={{height: "40rem"}}>
                        <Project isFlipped={true} />
                    </div>
                    <div className="w-screen" style={{height: "48rem"}}>
                        <Skills />
                    </div>
                    <div className="w-screen" style={{height: "32rem"}}>
                        <Contact />
                    </div>
                </OnePageScroller>
            </div>
        );
    }
}