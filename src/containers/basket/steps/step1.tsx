import React from 'react';

import style from './style.css';
import { Link } from 'react-router-dom';
import { URLs } from '../../../__data__/urls';
import { BasketLot } from '../../../components';

import { classic } from '../../../asset';

function Basket({ nextStep }) {
    return (
        <div className={style.basket}>
            <h1>Корзина</h1>
            <BasketLot img={classic} title={'Classic'} price={'8000'} />
            <div className={style.decision}>
                <Link to={URLs.product.url}>Вернуться к покупкам</Link>
                <button onClick={() => nextStep()} className={style.confirm}>
                    Оформить
                </button>
            </div>
        </div>
    );
}

export default Basket;
