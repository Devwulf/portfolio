import { mount, ReactWrapper } from "enzyme";
import { BrowserRouter } from "react-router-dom";

export const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}): ReactWrapper => {
    window.history.pushState({}, "Test page", route);
  
    return mount(ui, { wrappingComponent: BrowserRouter });
};