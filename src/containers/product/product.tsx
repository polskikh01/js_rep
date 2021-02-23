import React, { useEffect } from 'react';

import style from './style.css';
import { Head, Footer, Lot, LotMore } from '../../components/index';

import { accessories, complectation } from '../../asset/index';

import { URLs } from '../../__data__/urls';
import i18next from 'i18next';

import { connect } from 'react-redux';
import { getProducts } from '../../__data__/actions/product';
import { addProduct } from '../../__data__/actions/basket';
import { getImgByName } from '../../utils';

type MapStateToProps = {
    productItems: any;
    loading: boolean;
};
type MapDispatchToProps = {
    addProduct(item: any): () => void;
    getProducts(): () => void;
};
type ProductProps = MapDispatchToProps & MapStateToProps;

function Product({
    addProduct,
    productItems,
    getProducts,
    loading,
}: React.PropsWithChildren<ProductProps>) {
    useEffect(() => {
        getProducts();
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }

    return (
        <div id={'wrapper'}>
            <div className={style.focusWrapper} id={'focus-wrapper'}>
                <div className={style.page}>
                    <Head />
                    <div className={style.wrap}>
                        {productItems.map((lot, index) => (
                            <span key={index}>
                                <Lot
                                    title={lot.title}
                                    tagline={i18next.t(lot.tagline)}
                                    price={lot.price}
                                    text={i18next.t('js_rep.BUY')}
                                    click={() => addProduct(lot)}
                                    photo={getImgByName(lot.photo)}
                                />
                            </span>
                        ))}
                        <LotMore
                            title={i18next.t('js_rep.COMPLETE')}
                            tagline={i18next.t('js_rep.product.taglineComplete')}
                            to={URLs.complete.url}
                            text={i18next.t('js_rep.MORE')}
                            photo={complectation}
                        />
                        <LotMore
                            title={i18next.t('js_rep.ACCESSORIES')}
                            tagline={i18next.t('js_rep.product.taglineAccessories')}
                            to={URLs.accessories.url}
                            text={i18next.t('js_rep.MORE')}
                            photo={accessories}
                        />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state): MapStateToProps => ({
    productItems: state.product.productItems,
    loading: state.product.loading,
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    addProduct: (item) => dispatch(addProduct(item)),
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
