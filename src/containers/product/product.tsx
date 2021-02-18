import React, { useEffect } from 'react';

import style from './style.css';
import {Head, Footer, Lot} from '../../components/index';

import {classic, mini, ready, simple, accessories, complectation} from '../../asset/index';

import {URLs} from '../../__data__/urls';
import i18next from 'i18next';

import {connect} from 'react-redux';
import {addProduct, getProducts} from "../../__data__/actions/transport";

const lots = [
    {
        title: 'Simple',
        tagline: i18next.t('js_rep.product.taglineSimple'),
        price: '7000₽',
        photo: simple
    },
    {
        title: 'Classic',
        tagline: i18next.t('js_rep.product.taglineClassic'),
        price: '8500₽',
        photo: classic
    },
    {
        title: 'Mini',
        tagline: i18next.t('js_rep.product.taglineMini'),
        price: '6000₽',
        photo: mini
    },
    {
        title: 'Ready',
        tagline: i18next.t('js_rep.product.taglineReady'),
        price: '6500₽',
        photo: ready
    },
]

type MapStateToProps = {
    productItems: any
}
type MapDispatchToProps = {
    addProduct(item: any): () => void;
    getProducts(): () => void;
};
type ProductProps =  MapDispatchToProps & MapStateToProps;

function Product({ addProduct, productItems, getProducts }: React.PropsWithChildren<ProductProps>) {
    useEffect(() => {
        getProducts()
    }, [])

    console.log(productItems);

    return (
        <div id={'wrapper'}>
            <div className={style.focusWrapper} id={'focus-wrapper'}>
                <div className={style.page}>
                    <Head/>
                    <div className={style.wrap}>
                        {lots.map((lot, index) => (
                            <span key={index} onClick={() => addProduct(lot)}>
                                <Lot title={lot.title} tagline={lot.tagline} price={lot.price}
                                     text={i18next.t('js_rep.BUY')} photo={lot.photo}/>
                            </span>
                        ))}
                        <Lot
                            title={i18next.t('js_rep.COMPLETE')}
                            tagline={i18next.t('js_rep.product.taglineComplete')}
                            to={URLs.complete.url}
                            text={i18next.t('js_rep.MORE')}
                            photo={complectation}
                        />
                        <Lot
                            title={i18next.t('js_rep.ACCESSORIES')}
                            tagline={i18next.t('js_rep.product.taglineAccessories')}
                            to={URLs.accessories.url}
                            text={i18next.t('js_rep.MORE')}
                            photo={accessories}
                        />
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state): any => ({
    productItems: state.product.productItems
})

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    addProduct: (item) => dispatch(addProduct(item)),
    getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);