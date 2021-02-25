import React from 'react';
import i18next from 'i18next';
import MetaTags from 'react-meta-tags';

import style from './style.css';

import { Footer, Head } from '../../components';

class ShippingAndPayment extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <MetaTags>
                    <title>{i18next.t('js_rep.SAP')}</title>
                </MetaTags>
                <Head />
                <div className={style.wrap}>
                    <h1>{i18next.t('js_rep.sAP.info')}</h1>
                    <div className={style.delivery}>
                        <span className={style.title}>{i18next.t('js_rep.sAP.delivery')}</span>
                        <h5 style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '16px' }}>
                            {i18next.t('js_rep.sAP.delivery.locale')}
                        </h5>
                        <div style={{ paddingLeft: '18px' }}>
                            <ul>
                                <li>{i18next.t('js_rep.sAP.delivery.SDEK')}</li>
                                <li>{i18next.t('js_rep.sAP.delivery.MAIL')}</li>
                                <li>{i18next.t('js_rep.sAP.delivery.EMS')}</li>
                            </ul>
                        </div>
                        <h5 style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '16px' }}>
                            {i18next.t('js_rep.sAP.pickup')}
                        </h5>
                        <div style={{ paddingLeft: '18px' }}>
                            <ul>
                                <li>{i18next.t('js_rep.sAP.pickup.store')}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.payment}>
                        <span className={style.title}>{i18next.t('js_rep.sAP.payment')}</span>
                        <h5 style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '16px' }}>
                            {i18next.t('js_rep.sAP.payment.online')}
                        </h5>
                        <div style={{ paddingLeft: '18px' }}>
                            <ul>
                                <li>{i18next.t('js_rep.sAP.payment.online.EL')}</li>
                                <li>{i18next.t('js_rep.sAP.payment.online.BN')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ShippingAndPayment;
