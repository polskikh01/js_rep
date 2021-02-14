import React from 'react';

import style from './style.css';

import { Link } from 'react-router-dom';

import { URLs } from '../../__data__/urls';
import i18next from 'i18next';

const Footer = () => (
    <footer className={style.footerM}>
        <div className={style.footerContainer}>
            <span>Calabash</span>
            <h6>©2020-2021</h6>
        </div>
        <div className={style.footerContainer}>
            <span className={style.title}>{i18next.t('js_rep.PRODUCT')}</span>
            <Link to={URLs.product.url}>
                <span className={style.fCT}>{i18next.t('js_rep.HOOKAH')}</span>
            </Link>
            <Link to={URLs.accessories.url}>
                <span className={style.fCT}>{i18next.t('js_rep.ACCESSORIES')}</span>
            </Link>
            <Link to={URLs.complete.url}>
                <span className={style.fCT}>{i18next.t('js_rep.COMPLETE')}</span>
            </Link>
        </div>
        <div className={style.footerContainer}>
            <span className={style.title}>{i18next.t('js_rep.acc')}</span>
            <span className={style.fCT}>{i18next.t('js_rep.lk')}</span>
        </div>
        <div className={style.footerContainer}>
            <span className={style.title}>{i18next.t('js_rep.help')}</span>
            <Link to={URLs.shippingAndPayment.url}>
                <span className={style.fCT}>{i18next.t('js_rep.SAP')}</span>
            </Link>
            <Link to={URLs.contacts.url}>
                <span className={style.fCT}>{i18next.t('js_rep.CONTACTS')}</span>
            </Link>
        </div>
    </footer>
);

export default Footer;
