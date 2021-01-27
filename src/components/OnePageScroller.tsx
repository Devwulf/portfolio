import React from "react";

type OnePageScrollerProps = {
    children?: React.ReactNodeArray;
}

type OnePageScrollerState = {
    scrollIndex: number;
}

export default class OnePageScroller extends React.Component<OnePageScrollerProps, OnePageScrollerState> {
    private pageContainer: React.RefObject<HTMLDivElement>;
    
    constructor(props: OnePageScrollerProps) {
        super(props);

        this.pageContainer = React.createRef();

        this.state = {
            scrollIndex: 0
        };

        this.onScroll = this.onScroll.bind(this);
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

        /**/
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

        const nextHeight: number = (children[nextIndex] as any).clientHeight;
        let totalHeight: number = 0;
        for (let i = 0; i < nextIndex; i++) {
            totalHeight += (children[i] as any).clientHeight;
        }

        const windowHeight = window.innerHeight;
        const topOffset = nextIndex === 0 ? ((windowHeight - nextHeight) / 2) : 0;
        const botOffset = nextIndex === children.length - 1 ? windowHeight - nextHeight : ((windowHeight - nextHeight) / 2);
        pageContainer.style.transform = `translate3d(0, ${-(totalHeight - botOffset + topOffset)}px, 0)`;
        this.setState({scrollIndex: nextIndex});
        /**/
    }

    render(): JSX.Element {
        const { children } = this.props;
        return ( 
            <div className="overflow-hidden h-screen">
                <div ref={this.pageContainer}
                    className="transform duration-300 ease-in-out h-full"
                    onWheel={this.onScroll}>
                    {children}
                </div>
            </div>
        );
    }
}