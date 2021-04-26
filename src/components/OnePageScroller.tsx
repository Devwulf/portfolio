import React from "react";
import SectionButton from "./SectionButton";
import { ScrollerContext } from "../utils/ScrollerHelper";

export type IndexName = {
    index: number;
    name: string;
}

type OnePageScrollerProps = {
    goToId?: string | number;
    showNavigator?: boolean;
    children?: React.ReactNodeArray;
}

type OnePageScrollerState = {
    currentId: string;
    selectedId: string;
    scrollIndex: number;
    isNavHover: boolean;
}

export default class OnePageScroller extends React.Component<OnePageScrollerProps, OnePageScrollerState> {
    private pageContainer: React.RefObject<HTMLDivElement>;
    
    constructor(props: OnePageScrollerProps) {
        super(props);

        this.pageContainer = React.createRef();

        this.state = {
            currentId: "",
            selectedId: "",
            scrollIndex: 0,
            isNavHover: false
        };

        this.goToIndex = this.goToIndex.bind(this);
        this.getSectionNames = this.getSectionNames.bind(this);
        this.onUpdateId = this.onUpdateId.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.onNavHoverStart = this.onNavHoverStart.bind(this);
        this.onNavHoverEnd = this.onNavHoverEnd.bind(this);
    }

    componentDidMount() {
        if (this.props.goToId)
            this.onUpdateId();

        const pageContainer = this.pageContainer.current;
        if (!pageContainer)
            return;

        const children = pageContainer.childNodes;
        if (!children)
            return;

        this.setState({selectedId: (children[0] as HTMLDivElement).id});
    }

    componentDidUpdate() {
        const { goToId } = this.props;
        const { currentId, scrollIndex } = this.state;
        if (goToId) {
            if (typeof goToId === "number" && goToId !== scrollIndex)
                this.goToIndex(goToId);
            else if (typeof goToId === "string" && goToId !== currentId)
                this.onUpdateId();
        }
    }

    goToIndex(nextIndex: number) {
        const pageContainer = this.pageContainer.current;
        if (!pageContainer)
            return;

        const children = pageContainer.childNodes;
        if (!children)
            return;

        const nextChild = children[nextIndex] as HTMLDivElement; // as HTMLDivElement; to get intellisense working
        const nextHeight: number = nextChild.clientHeight;
        
        /*
        currentChild.setAttribute("style", "");
        nextChild.setAttribute("style", "z-index: 100");
        */
        
        let totalHeight: number = 0;
        for (let i = 0; i < nextIndex; i++) {
            totalHeight += (children[i] as any).clientHeight;
        }

        const windowHeight = window.innerHeight;
        const topOffset = nextIndex === 0 ? ((windowHeight - nextHeight) / 2) : 0;
        const botOffset = nextIndex === children.length - 1 ? windowHeight - nextHeight : ((windowHeight - nextHeight) / 2);
        pageContainer.style.transform = `translate3d(0, ${-(totalHeight - botOffset + topOffset)}px, 0)`;
        
        this.setState({selectedId: nextChild.id, scrollIndex: nextIndex});
    }

    getSectionNames(): IndexName[] {
        const { children } = this.props;
        if (!children)
            return [];

        const names: IndexName[] = [];
        for (let i = 0; i < children.length; i++) {
            const elem = (children[i] as React.ReactElement);
            const name = elem.props["label"];
            
            if (name)
                names.push({index: i, name: name});
        }

        return names;
    }

    onUpdateId() {
        const { goToId } = this.props;
        if (typeof goToId === "number") {
            this.goToIndex(goToId);
            return;
        }

        const pageContainer = this.pageContainer.current;
        if (!pageContainer)
            return;

        const children = pageContainer.childNodes;
        if (!children)
            return;

        for (let i = 0; i < children.length; i++) {
            if (goToId && goToId === (children[i] as any).id) {
                this.setState({currentId: goToId}, () => {
                    this.goToIndex(i);
                });
                break;
            }
        }
    }

    // We can use CSS's translate3d(0, y, 0) function for this, by changing y as a percent
    // Example: translate3d(0, -100%, 0) -> translate3d(0, 200%, 0)
    onScroll(event: React.WheelEvent<HTMLDivElement>) {
        const { scrollIndex } = this.state;
        
        const pageContainer = this.pageContainer.current;
        if (!pageContainer)
            return;

        const children = pageContainer.childNodes;
        if (!children)
            return;

        let nextIndex = scrollIndex;
        const deltaSign = Math.sign(event.deltaY);
        if (deltaSign > 0) {
            // Going down
            nextIndex = Math.min(children.length - 1, nextIndex + 1);
        }
        else if (deltaSign < 0) {
            // Going up
            nextIndex = Math.max(0, nextIndex - 1);
        }

        if (nextIndex === scrollIndex)
            return;
        
        this.goToIndex(nextIndex);
    }

    onNavHoverStart() {
        this.setState({isNavHover: true});
    }

    onNavHoverEnd() {
        this.setState({isNavHover: false});
    }

    render(): JSX.Element {
        const { showNavigator, children } = this.props;
        const { selectedId, scrollIndex } = this.state;
        const showNav = showNavigator ?? false;
        const names = this.getSectionNames();
        
        return ( 
            <div className="overflow-hidden relative h-screen">
                {showNav && (
                    <div className="absolute flex flex-col justify-center" style={{top: "50%", bottom: "50%", right: "0", zIndex: 100}}>
                        <div className="w-40 pr-4" style={{minHeight: (names.length * 32)}}
                            onMouseEnter={this.onNavHoverStart}
                            onMouseLeave={this.onNavHoverEnd}>
                            <div className="flex flex-col px-3 py-2 rounded">
                                {names.map(name => (
                                    <SectionButton key={name.index} indexName={name} currentIndex={scrollIndex} goToIndex={this.goToIndex} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <ScrollerContext.Provider value={selectedId}>
                    <div ref={this.pageContainer}
                        className="transform duration-300 ease-in-out h-full"
                        onWheel={this.onScroll}>
                        {children}
                    </div>
                </ScrollerContext.Provider>
            </div>
        );
    }
}