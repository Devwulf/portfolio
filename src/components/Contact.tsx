import React from "react";

type ContactProps = {

}

type ContactState = {

}

export default class Contact extends React.Component<ContactProps, ContactState> {
    constructor(props: ContactProps) {
        super(props);

        this.state = {

        };
    }

    render(): JSX.Element {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-700">
                <div className="mb-4 text-xl font-bold text-gray-200">Message Me!</div>
                <form action="" className="w-1/3">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="text-sm mb-2 text-gray-300">Name</label>
                        <input type="text" className="py-1 px-2 rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="text-sm mb-2 text-gray-300">Email</label>
                        <input type="text" className="py-1 px-2 rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="hidden">Message</label>
                        <textarea className="py-1 px-2 rounded" placeholder="Send a message..." />
                    </div>
                </form>
            </div>
        );
    }
}