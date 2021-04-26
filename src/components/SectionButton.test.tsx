import { shallow } from "enzyme";
import React from "react";
import SectionButton from "./SectionButton";

test("renders without crashing", () => {
    shallow(<SectionButton indexName={{index: 0, name: "something"}} currentIndex={0} goToIndex={() => {}} />);
});

describe("indexName prop", () => {
    test("does not render when indexName.index is negative", () => {
        const wrapper = shallow(
            <SectionButton indexName={{index: -1, name: "something"}} currentIndex={0} goToIndex={() => {}} />
        );

        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("does not render when indexName.name is empty", () => {
        const wrapper = shallow(
            <SectionButton indexName={{index: 0, name: ""}} currentIndex={0} goToIndex={() => {}} />
        );

        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("sets indexName.index into component", () => {
        const index = 100;
        let currentIndex = 0;
        const mockGoToIndex: (indexParam: number) => void = (indexParam) => { currentIndex = indexParam; };
        const wrapper = shallow(
            <SectionButton indexName={{index: index, name: "something"}} currentIndex={0} goToIndex={mockGoToIndex} />
        );
        
        // Check if the currentIndex is unchanged before clicking the button
        expect(currentIndex).toEqual(0);

        wrapper.find("button").simulate("click");
        expect(currentIndex).toEqual(index);
    });

    test("sets indexName.name into component", () => {
        const name = "something";
        const wrapper = shallow(
            <SectionButton indexName={{index: 0, name: name}} currentIndex={0} goToIndex={() => {}} />
        );

        expect(wrapper.find({children: name})).toBeTruthy();
    });
});

describe("currentIndex prop", () => {
    test("does not render when currentIndex is negative", () => {
        const wrapper = shallow(
            <SectionButton indexName={{index: 0, name: "something"}} currentIndex={-1} goToIndex={() => {}} />
        );
        
        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("shows label if index and currentIndex is equal", () => {
        const name = "something";
        // Equal index and currentIndex
        const wrapper = shallow(
            <SectionButton indexName={{index: 2, name: name}} currentIndex={2} goToIndex={() => {}} />
        );
        
        const elem = wrapper.find({children: name});
        // If equal index and currentIndex, label should show
        // TODO: Sadly doesn't work for shallow rendering
        //expect(getComputedStyle(elem.getDOMNode()).getPropertyValue("opacity")).toBe("1");
        expect(elem.hasClass("fadeInRight")).toBe(true);
        expect(elem.hasClass("fadeOutRight")).toBe(false);
    });

    test("hide label if index and currentIndex is not equal", () => {
        const name = "something";
        const wrapper = shallow(
            <SectionButton indexName={{index: 2, name: name}} currentIndex={1} goToIndex={() => {}} />
        );

        const elem = wrapper.find({children: name});
        // If unequal index and currentIndex, label should NOT show
        //expect(getComputedStyle(elem.getDOMNode()).getPropertyValue("opacity")).toBe("0");
        expect(elem.hasClass("fadeInRight")).toBe(false);
        expect(elem.hasClass("fadeOutRight")).toBe(true);
    });
});

describe("goToIndex prop", () => {
    test("runs goToIndex when button is clicked", () => {
        const index = 100;
        let currentIndex = 0;
        const mockGoToIndex: (indexParam: number) => void = (indexParam) => { currentIndex = indexParam; };
        const wrapper = shallow(
            <SectionButton indexName={{index: index, name: "something"}} currentIndex={0} goToIndex={mockGoToIndex} />
        );
        
        // Check if the currentIndex is unchanged before clicking the button
        expect(currentIndex).toEqual(0);

        wrapper.find("button").simulate("click");
        expect(currentIndex).toEqual(index);
    });
});

describe("isHover state", () => {
    test("changes isHover state on button hover and unhover", () => {
        const wrapper = shallow(
            <SectionButton indexName={{index: 0, name: "something"}} currentIndex={0} goToIndex={() => {}} />
        );

        expect(wrapper.state("isHover")).toBe(false);

        wrapper.find("button").simulate("mouseenter");
        expect(wrapper.state("isHover")).toBe(true);

        wrapper.find("button").simulate("mouseleave");
        expect(wrapper.state("isHover")).toBe(false);
    });

    test("changes styling on button hover and unhover and not currently selected", () => {
        const name = "something";
        const wrapper = shallow(
            <SectionButton indexName={{index: 0, name: name}} currentIndex={1} goToIndex={() => {}} />
        );
        
        let elem = wrapper.find({children: name});
        expect(elem.hasClass("fadeInRight")).toBe(false);
        expect(elem.hasClass("fadeOutRight")).toBe(true);

        wrapper.find("button").simulate("mouseenter");
        elem = wrapper.find({children: name});
        expect(elem.hasClass("fadeInRight")).toBe(true);
        expect(elem.hasClass("fadeOutRight")).toBe(false);

        wrapper.find("button").simulate("mouseleave");
        elem = wrapper.find({children: name});
        expect(elem.hasClass("fadeInRight")).toBe(false);
        expect(elem.hasClass("fadeOutRight")).toBe(true);
    });

    test("does not change styling on button hover and unhover and currently selected", () => {
        const name = "something";
        const wrapper = shallow(
            <SectionButton indexName={{index: 0, name: name}} currentIndex={0} goToIndex={() => {}} />
        );
        
        let elem = wrapper.find({children: name});
        expect(elem.hasClass("fadeInRight")).toBe(true);
        expect(elem.hasClass("fadeOutRight")).toBe(false);

        wrapper.find("button").simulate("mouseenter");
        elem = wrapper.find({children: name});
        expect(elem.hasClass("fadeInRight")).toBe(true);
        expect(elem.hasClass("fadeOutRight")).toBe(false);

        wrapper.find("button").simulate("mouseleave");
        elem = wrapper.find({children: name});
        expect(elem.hasClass("fadeInRight")).toBe(true);
        expect(elem.hasClass("fadeOutRight")).toBe(false);
    });
});
