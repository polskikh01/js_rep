import React, {useEffect} from 'react';

import style from './style.css';
import {white, black, magnit, connector, classicK, miniK, mini} from '../../asset/index';
import {Footer, Head, Lot, LotAlt} from '../../components';
import i18next from 'i18next';
import {addProduct, getProducts} from "../../__data__/actions/product";
import {connect} from "react-redux";

const completes = [
    {
        title: 'js_rep.complete.hoseW',
        price: '750₽',
        photo: white
    },
    {
        title: 'js_rep.complete.hoseB',
        price: '750₽',
        photo: black
    },
    {
        title: 'js_rep.complete.magnet',
        price: '80₽',
        photo: magnit
    },
    {
        title: 'js_rep.complete.connector',
        price: '600₽',
        photo: connector
    },
    {
        title: 'js_rep.complete.flaskC',
        price: '1200₽',
        photo: classicK
    },
    {
        title: 'js_rep.complete.flaskM',
        price: '1000₽',
        photo: miniK
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

function Complete({addProduct, productItems, getProducts}: React.PropsWithChildren<ProductProps>) {
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
                        {completes.map((lot, index) => (
                            <span key={index}>
                                <LotAlt title={i18next.t(lot.title)} price={lot.price}
                                     text={i18next.t('js_rep.BUY')} click={() => addProduct(lot)} photo={lot.photo}/>
                            </span>
                        ))}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state): MapStateToProps => ({
    productItems: state.product.productItems
})

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    addProduct: (item) => dispatch(addProduct(item)),
    getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Complete);
