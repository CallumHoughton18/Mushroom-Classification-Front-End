import React, {FunctionComponent} from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import NavBar from "./shared/components/Navigation/NavBar";
import ClassificationPage from "./classification/pages/ClassificationPage";
import "./scss/App.scss";

const App: FunctionComponent = () => {
    const routes = (
        <Switch>
            <Route path="/Classification" exact>
                <ClassificationPage />
            </Route>
            <Route path="/About" exact>
                <div>
                    <h1>About Page</h1>
                </div>
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
