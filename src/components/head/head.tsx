import React from 'react';

import style from "./style.css";

import Nav from '../nav';

import { basket } from "../../asset/index";

const Head = () => (
    <header className={style.mHeader}>
        <div className={style.menuHeader}>
            <div className={style.menu}>
                <a className={style.logo}>
                    <span className={style.lSText}>
                        Calabash
                    </span>
                </a>
                <nav className={style.navP}>
                    <Nav title="Продукты"/>
                    <Nav title="Доставка и оплата"/>
                    <Nav title="Контакты"/>
                </nav>
                <div className={style.basket}>
                    <img src={basket} alt="Basket"/>
                </div>
            </div>
        </div>
    </header>
);

export default Head;