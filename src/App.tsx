import React, {FunctionComponent, lazy, Suspense} from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import NavBar from "./shared/components/Navigation/NavBar";
import AboutPage from "./about/pages/AboutPage";

const ClassificationPage = lazy(() => import("./classification/pages/ClassificationPage"));

import "./stylesheets/main.scss";
import ClassificationResultPage from "./classification/pages/ClassificationResultPage";
import mockClassificationAPI from "./classification/api/mockClassificationAPI";
import setupfontAwesomeLibrary from "./libary_helpers/setupFontAwesomeLibrary";

const App: FunctionComponent = () => {
    setupfontAwesomeLibrary();
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
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <NavBar />
                <main>{routes}</main>
            </Router>
        </Suspense>
    );
};

export default App;
