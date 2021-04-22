import { shallow } from "enzyme";
import React from "react";
import ScrollerChild from "./ScrollerChild";

test("renders without crashing", () => {
    shallow(<ScrollerChild id="something" label="something" height="full" />);
});

describe("id prop", () => {
    test("does not render when id is empty", () => {
        const wrapper = shallow(
            <ScrollerChild id="" label="something" height="full">
                <div></div>
            </ScrollerChild>
        );

        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("sets id prop of root div", () => {
        const id = "something";
        const wrapper = shallow(
            <ScrollerChild id={id} label="something" height="full">
                <div></div>
            </ScrollerChild>
        );

        expect(wrapper.props()["id"]).toEqual(id);
    });
});

describe("label prop", () => {
    test("does not render when label is empty", () => {
        const wrapper = shallow(
            <ScrollerChild id="something" label="" height="full">
                <div></div>
            </ScrollerChild>
        );

        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("sets data-name prop of root div", () => {
        const label = "something";
        const wrapper = shallow(
            <ScrollerChild id="something" label={label} height="full">
                <div></div>
            </ScrollerChild>
        );

        expect(wrapper.props()["data-name"]).toEqual(label);
    });
});

describe("height prop", () => {
    test("does not render when height is 0", () => {
        const wrapper = shallow(
            <ScrollerChild id="something" label="something" height={0}>
                <div></div>
            </ScrollerChild>
        );

        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("does not render when height is negative", () => {
        const wrapper = shallow(
            <ScrollerChild id="something" label="something" height={-1}>
                <div></div>
            </ScrollerChild>
        );

        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("sets height style of root div when height is a number", () => {
        const height = 100;
        const wrapper = shallow(
            <ScrollerChild id="something" label="something" height={height}>
                <div></div>
            </ScrollerChild>
        );

        expect(wrapper.props()["style"]["height"]).toEqual(`${height}rem`);
    });

    test("sets height style of root div to 100vh when height is 'full'", () => {
        const wrapper = shallow(
            <ScrollerChild id="something" label="something" height="full">
                <div></div>
            </ScrollerChild>
        );

        expect(wrapper.props()["style"]["height"]).toEqual("100vh");
    });
});

describe("children prop", () => {
    test("does not render when no children", () => {
        const wrapper = shallow(<ScrollerChild id="something" label="something" height="full" />);
        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("sets children of component", () => {
        const children = (
            <>
                <div>test</div>
                <div>123</div>
            </>
        );
        let wrapper = shallow(
            <ScrollerChild id="something" label="something" height="full">
                {children}
            </ScrollerChild>
        );

        expect(wrapper.contains(<div>test</div>)).toEqual(true);
        expect(wrapper.contains(<div>123</div>)).toEqual(true);
    });
});