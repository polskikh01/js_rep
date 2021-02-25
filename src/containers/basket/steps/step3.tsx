import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import style from './style.css';

import { URLs } from '../../../__data__/urls';

function Basket() {
    return (
        <div className={style.basket}>
            <div className={style.ready}>
                <h1>{i18next.t('js_rep.basket.ready')}</h1>
                <span>{i18next.t('js_rep.basket.ty')}</span>
                <Link to={URLs.main.url}>{i18next.t('js_rep.basket.back')}</Link>
            </div>
        </div>
    );
}

export default Basket;
