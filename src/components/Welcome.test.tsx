import { shallow } from "enzyme";
import React from "react";
import Welcome from "./Welcome";

test("renders without crashing", () => {
    shallow(<Welcome />);
});