import React from "react";
import { shallow, mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { renderWithRouter } from "./utils/testUtils";

test("renders without crashing", () => {
    shallow(<App />);
});

test("renders welcome message", () => {
    const wrapper = mount(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    expect(wrapper.find("#welcomeMessage")).not.toBeNull();
});

test("renders when given bad id param", () => {
    const wrapper = renderWithRouter(<App />, { route: "/portfolio/someId" });
    expect(wrapper.find("#welcomeMessage")).toBeTruthy();
});

test("landing on bad page", () => {
    const wrapper = renderWithRouter(<App />, { route: "/something" });
    expect(wrapper.find("#notFound")).toBeTruthy();
});
