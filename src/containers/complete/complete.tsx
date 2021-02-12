import React from 'react';

import style from './style.css';
import { white, black, magnit, connector, classicK, miniK } from '../../asset/index';
import { Footer, Head, LotAlt } from '../../components';

class Complete extends React.Component {
    render() {
        return (
            <div id={'wrapper'}>
                <div className={style.focusWrapper} id={'focus-wrapper'}>
                    <div className={style.page}>
                        <Head />
                        <div className={style.wrap}>
                            <LotAlt
                                title={'Шланг белый'}
                                price={'750₽'}
                                text={'Купить'}
                                photo={white}
                            />
                            <LotAlt
                                title={'Шланг черный'}
                                price={'750₽'}
                                text={'Купить'}
                                photo={black}
                            />
                            <LotAlt
                                title={'Неодовый магнит'}
                                price={'80₽'}
                                text={'Купить'}
                                photo={magnit}
                            />
                            <LotAlt
                                title={'Коннектор'}
                                price={'600₽'}
                                text={'Купить'}
                                photo={connector}
                            />
                            <LotAlt
                                title={'Колба Classc'}
                                price={'1200₽'}
                                text={'Купить'}
                                photo={classicK}
                            />
                            <LotAlt
                                title={'Колба Mini'}
                                price={'1000₽'}
                                text={'Купить'}
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
