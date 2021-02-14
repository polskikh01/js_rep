import React from 'react';

import style from './style.css';

import Nav from '../nav';
import { Link } from 'react-router-dom';
import { URLs } from '../../__data__/urls';
import { basket } from '../../asset/index';
import i18next from 'i18next';

const Head = () => (
    <header className={style.mHeader}>
        <div className={style.menuHeader}>
            <div className={style.menu}>
                <Link className={style.logo} to={URLs.main.url}>
                    <span className={style.lSText}>Calabash</span>
                </Link>
                <nav className={style.navP}>
                    <Nav title={i18next.t('js_rep.PRODUCT')} link={URLs.product.url} />
                    <Nav title={i18next.t('js_rep.SAP')} link={URLs.shippingAndPayment.url} />
                    <Nav title={i18next.t('js_rep.CONTACTS')} link={URLs.contacts.url} />
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
