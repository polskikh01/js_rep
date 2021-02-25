import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import i18next from 'i18next';
import { connect } from 'react-redux';

import style from './style.css';

import { Footer, Head, LotAlt } from '../../components';
import { getAccessories } from '../../__data__/actions/accessories';
import { addProduct } from '../../__data__/actions/basket';
import { getImgByName } from '../../utils';

type MapStateToProps = {
    productItems: any;
    loading: boolean;
};
type MapDispatchToProps = {
    addProduct(item: any): () => void;
    getAccessories(): () => void;
};
type ProductProps = MapDispatchToProps & MapStateToProps;

function Accessories({
    addProduct,
    productItems,
    getAccessories,
    loading,
}: React.PropsWithChildren<ProductProps>) {
    useEffect(() => {
        getAccessories();
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }

    return (
        <div className={style.page}>
            <MetaTags>
                <title>{i18next.t('js_rep.ACCESSORIES')}</title>
            </MetaTags>
            <Head />
            <div className={style.wrap}>
                {productItems.map((lot, index) => (
                    <span key={index}>
                        <LotAlt
                            title={i18next.t(lot.title)}
                            price={lot.price}
                            text={i18next.t('js_rep.BUY')}
                            click={() => addProduct(lot)}
                            photo={getImgByName(lot.photo)}
                        />
                    </span>
                ))}
            </div>
            <Footer />
        </div>
    );
}

const mapStateToProps = (state): MapStateToProps => ({
    productItems: state.accessories.productItems,
    loading: state.accessories.loading,
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    addProduct: (item) => dispatch(addProduct(item)),
    getAccessories: () => dispatch(getAccessories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);
