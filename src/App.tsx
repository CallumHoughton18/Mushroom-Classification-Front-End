import React, {FunctionComponent} from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import NavBar from "./shared/components/Navigation/NavBar";
import ClassificationPage from "./classification/pages/ClassificationPage";
import AboutPage from "./about/pages/AboutPage";

import "./stylesheets/main.scss";
import ClassificationResultPage from "./classification/pages/ClassificationResultPage";
import mockClassificationAPI from "./classification/api/mockClassificationAPI";

const App: FunctionComponent = () => {
    const routes = (
        <Switch>
            <Route path="/Classification" exact>
                <ClassificationPage />
            </Route>
            <Route path="/About" exact>
                <AboutPage />
            </Route>
            <Route path="/" exact>
                <AboutPage />
            </Route>
            <Route path="/ClassificationResult">
                <ClassificationResultPage classificationAPI={mockClassificationAPI} />
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
