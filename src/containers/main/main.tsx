import React from 'react';

import {Head} from '../../components/index';

import style from './style.css';

import {URLs} from '../../__data__/urls';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Main() {
    const { t, i18n } = useTranslation();

    return (
        <div id={'wrapper'}>
            <div className={style.focusWrapper} id={'focus-wrapper'}>
                <div className={style.page}>
                    <Head/>
                    <div className={style.wrap}>
                        <div className={style.line}>
                            <section>
                                <div className={style.info}>
                                    <div className={style.infoPhoto}/>
                                    <div className={style.infoText}>
                                        <div className={style.text}>
                                            <div className={style.textT}>
                                                <span className={style.lSText}>Calabash</span>
                                            </div>
                                            <div className={style.textT}>
                                                    <span className={style.lSTextB}>
                                                        {t('js_rep.main.tagline1')} <br/> создавать стиль
                                                    </span>
                                            </div>
                                            <div className={style.textT}>
                                                <Link to={URLs.product.url}>
                                                        <span className={style.lSTextA}>
                                                            Узнать больше
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
            </div>
        </div>
    );
}

export default Main;
