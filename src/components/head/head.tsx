import React from 'react';

import style from "./style.css";

import Nav from '../nav';

import { URLs } from '../../__data__/urls';

import { basket } from "../../asset/index";

const Head = () => (
    <header className={style.mHeader}>
        <div className={style.menuHeader}>
            <div className={style.menu}>
                <a className={style.logo} href={'/js_rep' + URLs.main.url}>
                    <span className={style.lSText}>
                        Calabash
                    </span>
                </a>
                <nav className={style.navP}>
                    <Nav title="Продукты" link={'/js_rep' + URLs.product.url}/>
                    <Nav title="Доставка и оплата" link={'/js_rep' + URLs.shippingAndPayment.url}/>
                    <Nav title="Контакты" link={'/js_rep' + URLs.contacts.url}/>
                </nav>
                <div className={style.basket}>
                    <img src={basket} alt="Basket"/>
                </div>
            </div>
        </div>
    </header>
);

export default Head;