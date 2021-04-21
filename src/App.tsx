import React from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import "./App.css";
import "./assets/main.css";
import OnePageScroller from "./components/OnePageScroller";
import Main from "./pages/Main";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import GoogleFontLoader from "react-google-font-loader";
import NotFound from "./pages/NotFound";

library.add(fas);

function App() {
    return (
        <Switch>
            <Route exact path="/portfolio/" component={Main} />
            <Route exact path="/portfolio/:id" component={MainComponent} />
            <Route component={NotFound} />
        </Switch>
    );
}

function MainComponent() {
    const { id } = useParams();

    return (
        <Main id={id} />
    );
}

export default App;
