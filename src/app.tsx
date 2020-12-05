import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './containers/login';
import Main from "./containers/main";

import './app.css';

const App = () => (
    <Main/>
    /*<Router>
        <Switch>
            <Route path={"/login"}>
                <Login/>
            </Route>
            <Route path={"/"}>
                <Main/>
            </Route>
        </Switch>
    </Router>*/
);

export default App;
