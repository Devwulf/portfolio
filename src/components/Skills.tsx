import React from "react";

type SkillsProps = {

}

type SkillsState = {

}

export default class Skills extends React.Component<SkillsProps, SkillsState> {
    constructor(props: SkillsProps) {
        super(props);

        this.state = {

        };
    }

    render(): JSX.Element {
        return (
            <div className="w-full h-full flex items-center justify-between px-24 py-24 bg-gray-800">
                <div className="flex flex-col items-center justify-center mr-24 w-full h-full rounded-lg shadow-lg bg-gray-200">
                    <span className="text-3xl mb-12 font-bold">Languages</span>
                    <span className="text-2xl mb-4">C#</span>
                    <span className="text-2xl mb-4">Java</span>
                    <span className="text-2xl mb-4">Javascript/TypeScript</span>
                    <span className="text-2xl mb-4">CSS</span>
                    <span className="text-2xl mb-4">HTML</span>
                    <span className="text-2xl mb-4">Python</span>
                </div>
                <div className="flex flex-col items-center justify-center mr-24 w-full h-full rounded-lg shadow-lg bg-gray-200">
                    <span className="text-3xl mb-12 font-bold">Skills</span>
                    <span className="text-2xl mb-4">MySQL</span>
                    <span className="text-2xl mb-4">MongoDB</span>
                    <span className="text-2xl mb-4">React</span>
                    <span className="text-2xl mb-4">Asp.NET Core</span>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg shadow-lg bg-gray-200">
                    <span className="text-3xl mb-12 font-bold">Interests</span>
                    <span className="text-2xl mb-4">Data Science</span>
                    <span className="text-2xl mb-4">Machine Learning</span>
                    <span className="text-2xl mb-4">Web Development</span>
                    <span className="text-2xl mb-4">SaaS</span>
                </div>
            </div>
        );
    }
}