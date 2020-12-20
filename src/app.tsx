import React from "react";
import {
    BrowserRouter
} from "react-router-dom";

import pkg from "../package.json";

import Dashboard from "./containers/dashboadr"

import './app.css';

const App = () => (
    <BrowserRouter basename='/js_rep'>
        <Dashboard/>
    </BrowserRouter>
);

export default App;
