import React, {useEffect} from 'react';

import style from './style.css';
import {killerM, glinaClassic, glinaMini} from '../../asset/index';
import {Footer, Head, Lot, LotAlt} from '../../components';

import i18next from 'i18next';
import {addProduct, getProducts} from "../../__data__/actions/product";
import {connect} from "react-redux";

const accessories = [
    {
        title: 'Killer M',
        price: '2750₽',
        photo: killerM
    },
    {
        title: 'Glina Classic',
        price: '800₽',
        photo: glinaClassic
    },
    {
        title: 'Glina Mini',
        price: '650₽',
        photo: glinaMini
    }
]

type MapStateToProps = {
    productItems: any
}
type MapDispatchToProps = {
    addProduct(item: any): () => void;
    getProducts(): () => void;
};
type ProductProps =  MapDispatchToProps & MapStateToProps;

function Accessories({ addProduct, productItems, getProducts }: React.PropsWithChildren<ProductProps>) {
    useEffect(() => {
        getProducts()
    }, [])

    console.log(productItems);
    return (
        <div className={style.page}>
            <Head/>
            <div className={style.wrap}>
                {accessories.map((lot, index) => (
                    <span key={index}>
                                <LotAlt title={i18next.t(lot.title)} price={lot.price}
                                     text={i18next.t('js_rep.BUY')} click={() => addProduct(lot)} photo={lot.photo}/>
                            </span>
                ))}
            </div>
            <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);
