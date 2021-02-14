import React from 'react';

import style from './style.css';
import { white, black, magnit, connector, classicK, miniK } from '../../asset/index';
import { Footer, Head, LotAlt } from '../../components';
import i18next from 'i18next';
import {I18nContext} from "react-i18next";

class Complete extends React.Component {
    render() {
        return (
            <div id={'wrapper'}>
                <div className={style.focusWrapper} id={'focus-wrapper'}>
                    <div className={style.page}>
                        <Head />
                        <div className={style.wrap}>
                            <LotAlt
                                title={i18next.t('js_rep.complete.hoseW')}
                                price={'750₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={white}
                            />
                            <LotAlt
                                title={i18next.t('js_rep.complete.hoseB')}
                                price={'750₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={black}
                            />
                            <LotAlt
                                title={i18next.t('js_rep.complete.magnet')}
                                price={'80₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={magnit}
                            />
                            <LotAlt
                                title={i18next.t('js_rep.complete.connector')}
                                price={'600₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={connector}
                            />
                            <LotAlt
                                title={i18next.t('js_rep.complete.flaskC')}
                                price={'1200₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={classicK}
                            />
                            <LotAlt
                                title={i18next.t('js_rep.complete.flaskM')}
                                price={'1000₽'}
                                text={i18next.t('js_rep.BUY')}
                                photo={miniK}
                            />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Complete;
