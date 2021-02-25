import React from 'react';
import MetaTags from 'react-meta-tags';
import i18next from 'i18next';

import style from './style.css';

import { Head } from '../../components/index';
import { URLs } from '../../__data__/urls';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className={style.page}>
            <MetaTags>
                <title>{i18next.t('js_rep.CALABASH')}</title>
            </MetaTags>
            <Head />
            <div className={style.wrap}>
                <div className={style.line}>
                    <section>
                        <div className={style.info}>
                            <div className={style.infoPhoto} />
                            <div className={style.infoText}>
                                <div className={style.text}>
                                    <div className={style.textT}>
                                        <span className={style.lSText}>Calabash</span>
                                    </div>
                                    <div className={style.textT}>
                                        <span className={style.lSTextB}>
                                            {i18next.t('js_rep.main.tagline1')} <br />{' '}
                                            {i18next.t('js_rep.main.tagline2')}
                                        </span>
                                    </div>
                                    <div className={style.textT}>
                                        <Link to={URLs.product.url}>
                                            <span className={style.lSTextA}>
                                                {i18next.t('js_rep.MORE')}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Main;
