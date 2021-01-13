import React from "react";
import dashboard from "../assets/dashboard.jpg";

type ProjectProps = {
    isFlipped: boolean;
}

type ProjectState = {

}

export default class Project extends React.Component<ProjectProps, ProjectState> {
    constructor(props: ProjectProps) {
        super(props);

        this.state = {

        };
    }

    render(): JSX.Element {
        const { isFlipped } = this.props;

        return (
            <div className="w-full h-full flex items-center justify-center">
                {!isFlipped && (
                    <div className="w-full h-full flex flex-row">
                        <div className="w-1/2 flex items-center justify-center">
                            <span className="text-3xl">Example Project</span>
                        </div>
                        <img src={dashboard} style={{width: "60%", height: "100%", objectFit: "cover", objectPosition: "0px -140px"}} />
                    </div>
                ) || 
                isFlipped && (
                    <div className="w-full h-full flex flex-row">
                        <img src={dashboard} style={{width: "60%", height: "100%", objectFit: "cover", objectPosition: "0px -140px"}} />
                        <div className="w-1/2 flex items-center justify-center">
                            <span className="text-3xl">Example Project</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}