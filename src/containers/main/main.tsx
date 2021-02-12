import React from 'react';

import { Head } from '../../components/index';

import style from './style.css';

import { URLs } from '../../__data__/urls';

class Main extends React.Component {
    render() {
        return (
            <div id={'wrapper'}>
                <div className={style.focusWrapper} id={'focus-wrapper'}>
                    <div className={style.page}>
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
                                                        Твоя очередь <br /> создавать стиль
                                                    </span>
                                                </div>
                                                <div className={style.textT}>
                                                    <a href={'/js_rep' + URLs.product.url}>
                                                        <span className={style.lSTextA}>
                                                            Узнать больше
                                                        </span>
                                                    </a>
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
}

export default Main;
