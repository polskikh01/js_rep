import React from 'react';

import style from './style.css';

import Nav from '../nav';
import { Link } from 'react-router-dom';

import { URLs } from '../../__data__/urls';

import { basket } from '../../asset/index';

const Head = () => (
    <header className={style.mHeader}>
        <div className={style.menuHeader}>
            <div className={style.menu}>
                <Link className={style.logo} to={URLs.main.url}>
                    <span className={style.lSText}>Calabash</span>
                </Link>
                <nav className={style.navP}>
                    <Nav title="Продукты" link={URLs.product.url} />
                    <Nav title="Доставка и оплата" link={URLs.shippingAndPayment.url} />
                    <Nav title="Контакты" link={URLs.contacts.url} />
                </nav>
                <div className={style.basket}>
                    <Link to={URLs.basket.url}>
                        <img src={basket} alt="Basket" />
                    </Link>
                </div>
            </div>
        </div>
    </header>
);

export default Head;
