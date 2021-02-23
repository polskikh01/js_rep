import React, { useEffect } from 'react';

import style from './style.css';
import { Link } from 'react-router-dom';
import { URLs } from '../../../__data__/urls';
import { BasketLot } from '../../../components';

import { connect } from 'react-redux';

import { classic } from '../../../asset';
import { getImgByName } from '../../../utils';

import { getBasket } from '../../../__data__/actions/basket';
import i18next from 'i18next';

type MapStateToProps = {
    loading: boolean;
    basket: any;
    nextStep: any;
};
type MapDispatchToProps = {
    getBasket(): () => void;
};
type ProductProps = MapDispatchToProps & MapStateToProps;

function Basket({ basket, loading, getBasket, nextStep }: React.PropsWithChildren<ProductProps>) {
    useEffect(() => {
        getBasket();
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }

    return (
        <div className={style.basket}>
            <h1>Корзина</h1>
            {basket.map((lot, index) => (
                <BasketLot
                    key={index}
                    img={getImgByName(lot.photo)}
                    title={i18next.t(lot.title)}
                    price={lot.price}
                />
            ))}
            <div className={style.decision}>
                <Link to={URLs.product.url}>Вернуться к покупкам</Link>
                <button onClick={() => nextStep()} className={style.confirm}>
                    Оформить
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state): any => ({
    basket: state.basket.basket,
    loading: state.basket.loading,
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    getBasket: () => dispatch(getBasket()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
