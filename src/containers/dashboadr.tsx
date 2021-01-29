import React from 'react';
import {
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import { URLs } from "../__data__/urls";

import Main from "./main/main";
import Product from "./product/product";
import Accessories from "./accessories/accessories";
import Complete from "./complete/complete";
import Contacts from "./contacts";
import ShippingAndPayment from "./shippingAndPayment";

const Dashboadr = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to={URLs.main.url}/>
        </Route>
        <Route path={URLs.main.url}>
            <Main />
        </Route>
        <Route path={URLs.product.url}>
            <Product />
        </Route>
        <Route path={URLs.shippingAndPayment.url}>
            <ShippingAndPayment />
        </Route>
        <Route path={URLs.contacts.url}>
            <Contacts />
        </Route>
        <Route path={URLs.accessories.url}>
            <Accessories />
        </Route>
        <Route path={URLs.complete.url}>
            <Complete />
        </Route>
        <Route path="*">
            <h1>Что-то пошло не так =(</h1>
        </Route>
    </Switch>
);

export default Dashboadr;