import React from "react";

import style from './style.css';

import { Link } from 'react-router-dom';

import { URLs } from '../../__data__/urls';

const Footer = () => (
    <footer className={style.footerM}>
        <div className={style.footerContainer}>
                                <span>
                                    Calabash
                                </span>
            <h6>©2020-2021</h6>
        </div>
        <div className={style.footerContainer}>
                                <span className={style.title}>
                                    Продукты
                                </span>
            <Link to={URLs.product.url}><span className={style.fCT}>Кальяны</span></Link>
            <Link to={URLs.accessories.url}><span className={style.fCT}>Аксессуары</span></Link>
            <Link to={URLs.complete.url}><span className={style.fCT}>Комплектующие</span></Link>
        </div>
        <div className={style.footerContainer}>
            <span className={style.title}>
                Аккаунт
            </span>
            <span className={style.fCT}>Личный кабинет</span>
        </div>
        <div className={style.footerContainer}>
                                <span className={style.title}>
                                    Помощь
                                </span>
            <Link to={URLs.shippingAndPayment.url}><span className={style.fCT}>Доставка и оплата</span></Link>
            <Link to={URLs.contacts.url}><span className={style.fCT}>Контакты</span></Link>
        </div>
    </footer>
);

export default Footer;