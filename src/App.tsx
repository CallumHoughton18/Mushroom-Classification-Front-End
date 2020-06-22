import React, {FunctionComponent} from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import NavBar from "./shared/components/Navigation/NavBar";
import ClassificationPage from "./classification/pages/ClassificationPage";
import "./scss/App.scss";
import AboutPage from "./about/AboutPage";

const App: FunctionComponent = () => {
    const routes = (
        <Switch>
            <Route path="/Classification" exact>
                <ClassificationPage />
            </Route>
            <Route path="/About" exact>
                <AboutPage />
            </Route>
        </Switch>
    );

    return (
        <Router>
            <NavBar />
            <main>{routes}</main>
        </Router>
    );
};

export default App;
