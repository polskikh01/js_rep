import React from 'react';

import style from "./style.css";
import {
    Head,
    Footer,
    Lot
} from '../../components/index'

import {
    classic,
    mini,
    ready,
    simple,
    accessories,
    complectation
} from '../../asset/index';

import { URLs } from '../../__data__/urls';

class Product extends React.Component {
    render() {
        return (
            <div id={"wrapper"}>
                <div className={style.focusWrapper} id={"focus-wrapper"}>
                    <div className={style.page}>
                        <Head/>
                        <div className={style.wrap}>
                            <Lot title={"Simple"} tagline={"Все гениальное просто"} text={"Купить"} photo={simple}/>
                            <Lot title={"Classic"} tagline={"Вечная классика"} text={"Купить"} photo={classic}/>
                            <Lot title={"Mini"} tagline={"Выбор искушенных"} text={"Купить"} photo={mini}/>
                            <Lot title={"Ready"} tagline={"Твой. Новый."} text={"Купить"} photo={ready}/>
                            <Lot title={"Комплектующие"} tagline={"Можете потерять или забыть, но сломать не получится"} text={"Узнать больше"} photo={complectation}/>
                            <Lot title={"Аксессуары"} tagline={"Полезная деталь Вашего комфорта"} text={"Узнать больше"} photo={accessories}/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Product;