import { shallow } from "enzyme";
import React from "react";
import Project from "./Project";

test("renders without crashing", () => {
    shallow(<Project isFlipped={false} />);
});

describe("isFlipped prop", () => {
    test("renders image on the left side if isFlipped is true", () => {
        const wrapper = shallow(<Project isFlipped={true} />);
        expect(wrapper.children().childAt(0).type()).toEqual("img");
    });

    test("renders image on the right side if isFlipped is false", () => {
        const wrapper = shallow(<Project isFlipped={false} />);
        expect(wrapper.children().childAt(1).type()).toEqual("img");
    });
});