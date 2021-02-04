import React from "react";
import { Link } from "react-router-dom";

import style from "./style.css";

import {Footer, Head} from "../../components";
import { URLs } from "../../__data__/urls";

const BasketPage: React.FC = ({children}) => (
    <div className={style.page}>
        <Head/>
        <div className={style.wrap}>
            {children}
        </div>
        <Footer/>
    </div>
);

export default BasketPage;