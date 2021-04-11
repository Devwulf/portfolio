import React from "react";
import { ScrollerContext } from "../utils/ScrollerHelper";

type ScrollerChildProps = {
    id: string;
    label: string;
    height: number | "full";
    
    children?: React.ReactNode;
}

type ScrollerChildState = {

}

export default class ScrollerChild extends React.Component<ScrollerChildProps, ScrollerChildState> {
    static contextType = ScrollerContext;
    constructor(props: ScrollerChildProps) {
        super(props);

        this.state = {

        };
    }

    render(): JSX.Element {
        const { id, label, height, children } = this.props;
        console.log(this.context);
        
        return (
            <div id={id} data-name={label} className="relative w-screen" style={{height: height === "full" ? "100vh" : `${height}rem`}}>
                <div className={`transform duration-300 ease-in-out absolute h-full w-screen bg-gray-900 ${id === this.context ? "opacity-0" : "opacity-75"}`} style={{zIndex: 1}}></div>
                {children}
            </div>
        );
    }
}