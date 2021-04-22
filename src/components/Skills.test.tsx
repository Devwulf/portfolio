import { shallow } from "enzyme";
import React from "react";
import Skills from "./Skills";

test("renders without crashing", () => {
    shallow(<Skills />);
});