import React from "react";

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
                <div className="w-screen h-screen bg-gray-900">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-3xl text-gray-200">Welcome Screen</div>
                    </div>
                </div>
                <div className="w-screen bg-gray-200" style={{height: "32rem"}}>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-3xl text-gray-900">Project 1</div>
                    </div>
                </div>
                <div className="w-screen bg-gray-300" style={{height: "32rem"}}>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-3xl text-gray-900">Project 2</div>
                    </div>
                </div>
                <div className="w-screen bg-gray-400" style={{height: "32rem"}}>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-3xl text-gray-900">Project 3</div>
                    </div>
                </div>
                <div className="w-screen bg-gray-500" style={{height: "32rem"}}>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-3xl text-gray-900">Project 4</div>
                    </div>
                </div>
                <div className="w-screen bg-gray-800" style={{height: "32rem"}}>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-3xl text-gray-200">Skills</div>
                    </div>
                </div>
                <div className="w-screen bg-gray-700" style={{height: "32rem"}}>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-3xl text-gray-200">Contact</div>
                    </div>
                </div>
            </div>
        );
    }
}