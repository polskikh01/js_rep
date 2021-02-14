import React from 'react';

import style from './style.css';
import { Head, Footer, Lot } from '../../components/index';

import { classic, mini, ready, simple, accessories, complectation } from '../../asset/index';

import { URLs } from '../../__data__/urls';
import i18next from 'i18next';

class Product extends React.Component {
    render() {
        return (
            <div id={'wrapper'}>
                <div className={style.focusWrapper} id={'focus-wrapper'}>
                    <div className={style.page}>
                        <Head />
                        <div className={style.wrap}>
                            <Lot
                                title={'Simple'}
                                tagline={i18next.t('js_rep.product.taglineSimple')}
                                price={'7000₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={simple}
                            />
                            <Lot
                                title={'Classic'}
                                tagline={i18next.t('js_rep.product.taglineClassic')}
                                price={'8500₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={classic}
                            />
                            <Lot
                                title={'Mini'}
                                tagline={i18next.t('js_rep.product.taglineMini')}
                                price={'6000₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={mini}
                            />
                            <Lot
                                title={'Ready'}
                                tagline={i18next.t('js_rep.product.taglineReady')}
                                price={'6500₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={ready}
                            />
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
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
