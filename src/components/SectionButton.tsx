import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IndexName } from "./OnePageScroller";

type SectionButtonProps = {
    indexName: IndexName;
    currentIndex: number;
    goToIndex(index: number): void;
}

type SectionButtonState = {
    isHover: boolean;
}

export default class SectionButton extends React.Component<SectionButtonProps, SectionButtonState> {
    constructor(props: SectionButtonProps) {
        super(props);

        this.state = {
            isHover: false
        };

        this.onHoverStart = this.onHoverStart.bind(this);
        this.onHoverEnd = this.onHoverEnd.bind(this);
    }

    onHoverStart() {
        this.setState({isHover: true});
    }

    onHoverEnd() {
        this.setState({isHover: false});
    }

    render(): JSX.Element {
        const { indexName, currentIndex, goToIndex } = this.props;
        const { isHover } = this.state;
        const isSelected = currentIndex === indexName.index;

        return (
            <button key={indexName.index} className="relative mt-1 mb-1"
                onClick={() => goToIndex(indexName.index)}
                onMouseEnter={this.onHoverStart}
                onMouseLeave={this.onHoverEnd}>
                <div className={`transform duration-200 ease-in-out absolute h-full rounded-full ${isHover || isSelected ? "w-full bg-blue-500" : "w-8 bg-gray-800"}`}
                    style={{right: 0}}></div>
                <div className="flex flex-row-reverse items-center px-2">
                    <FontAwesomeIcon icon="dot-circle" className="text-gray-400" style={{zIndex: 100}} />
                    <span className={`mr-4 text-gray-200 ${isHover || isSelected ? "fadeInRight anim-200" : "fadeOutRight anim-200"}`}>
                        {indexName.name}
                    </span>
                </div>
            </button>
        );
    }
}