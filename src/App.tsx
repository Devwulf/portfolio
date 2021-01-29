import React from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import "./App.css";
import "./assets/main.css";
import OnePageScroller from "./components/OnePageScroller";
import Main from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/portfolio/" component={Main} />
                <Route exact path="/portfolio/:id" component={MainComponent} />
            </Switch>
        </BrowserRouter>
    );
}

function MainComponent() {
    const { id } = useParams();

    return (
        <Main id={id} />
    )
}

export default App;
