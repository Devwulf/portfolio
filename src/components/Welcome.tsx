import React from "react";
import welcomeImg from "../assets/welcome-img.jpg";

type WelcomeProps = {

}

type WelcomeState = {

}

export default class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    constructor(props: WelcomeProps) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="w-full h-full flex items-center justify-center px-48 py-40 bg-gray-900">
                <div className="">
                    <div className="mr-48 text-5xl text-gray-200">Hello! I am a</div>
                    <div className="mr-48 text-5xl text-gray-200">full-stack web dev;</div>
                    <div className="mr-48 text-5xl text-gray-200">aspiring data scientist.</div>
                </div>
                <img src={welcomeImg} width={512} height={512} />
            </div>
        );
    }
}