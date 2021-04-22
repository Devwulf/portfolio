import { shallow } from "enzyme";
import React from "react";
import Contact from "./Contact";

test("renders without crashing", () => {
    shallow(<Contact />);
});