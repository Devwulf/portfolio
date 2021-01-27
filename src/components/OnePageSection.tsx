import React from "react";

interface OnePageSectionProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}

type OnePageSectionState = {

}

export default class OnePageSection extends React.Component<OnePageSectionProps, OnePageSectionState> {
    constructor(props: OnePageSectionProps) {
        super(props);

        this.state = {

        };
    }

    render(): JSX.Element {
        const { children, ...rest } = this.props;
        return (
            <div {...rest}>
                {children}
            </div>
        );
    }
}