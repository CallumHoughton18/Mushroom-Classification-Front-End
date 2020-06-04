import React, {FunctionComponent} from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import NavBar from "./shared/components/Navigation/NavBar";

const App: FunctionComponent = () => {
    const routes = (
        <Switch>
            <Route path="/" exact>
                <div>
                    <h1>Classification Page</h1>
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
