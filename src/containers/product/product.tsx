import React from 'react';

import style from './style.css';
import { Head, Footer, Lot } from '../../components/index';

import { classic, mini, ready, simple, accessories, complectation } from '../../asset/index';

import { URLs } from '../../__data__/urls';

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
                                tagline={'Все гениальное просто'}
                                price={'7000₽'}
                                text={'Купить'}
                                photo={simple}
                            />
                            <Lot
                                title={'Classic'}
                                tagline={'Вечная классика'}
                                price={'8500₽'}
                                text={'Купить'}
                                photo={classic}
                            />
                            <Lot
                                title={'Mini'}
                                tagline={'Выбор искушенных'}
                                price={'6000₽'}
                                text={'Купить'}
                                photo={mini}
                            />
                            <Lot
                                title={'Ready'}
                                tagline={'Твой. Новый.'}
                                price={'6500₽'}
                                text={'Купить'}
                                photo={ready}
                            />
                            <Lot
                                title={'Комплектующие'}
                                tagline={'Можете потерять или забыть, но сломать не получится'}
                                to={URLs.complete.url}
                                text={'Узнать больше'}
                                photo={complectation}
                            />
                            <Lot
                                title={'Аксессуары'}
                                tagline={'Полезная деталь Вашего комфорта'}
                                to={URLs.accessories.url}
                                text={'Узнать больше'}
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
