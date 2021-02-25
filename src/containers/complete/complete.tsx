import React, { useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux';
import i18next from 'i18next';

import style from './style.css';

import { Footer, Head, LotAlt } from '../../components';
import { getComplete } from '../../__data__/actions/complete';
import { addProduct } from '../../__data__/actions/basket';
import { getImgByName } from '../../utils';

type MapStateToProps = {
    productItems: any;
    loading: boolean;
};
type MapDispatchToProps = {
    addProduct(item: any): () => void;
    getComplete(): () => void;
};
type ProductProps = MapDispatchToProps & MapStateToProps;

function Complete({
    addProduct,
    productItems,
    getComplete,
    loading,
}: React.PropsWithChildren<ProductProps>) {
    useEffect(() => {
        getComplete();
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }

    return (
        <div className={style.page}>
            <MetaTags>
                <title>{i18next.t('js_rep.COMPLETE')}</title>
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
    productItems: state.complete.productItems,
    loading: state.complete.loading,
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
    addProduct: (item) => dispatch(addProduct(item)),
    getComplete: () => dispatch(getComplete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Complete);
