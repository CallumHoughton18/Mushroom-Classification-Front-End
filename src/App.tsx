import React, {FunctionComponent, lazy, Suspense} from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import NavBar from "./shared/components/Navigation/NavBar";
import AboutPage from "./about/pages/AboutPage";

const ClassificationPage = lazy(() => import("./classification/pages/ClassificationPage"));

import "./stylesheets/main.scss";
import ClassificationResultPage from "./classification/pages/ClassificationResultPage";
import classificationAPI from "./classification/api/classificationAPI";
import setupfontAwesomeLibrary from "./library_helpers/setupFontAwesomeLibrary";
import ErrorPage from "./error/ErrorPage";

const App: FunctionComponent = () => {
    setupfontAwesomeLibrary();
    const routes = (
        <Switch>
            <Route path="/Classification" exact>
                <ClassificationPage classificationAPI={classificationAPI} />
            </Route>
            <Route path="/About" exact>
                <AboutPage />
            </Route>
            <Route path="/" exact>
                <AboutPage />
            </Route>
            <Route path="/ClassificationResult">
                <ClassificationResultPage classificationAPI={classificationAPI} />
            </Route>
            <Route path="/Error">
                <ErrorPage />
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
