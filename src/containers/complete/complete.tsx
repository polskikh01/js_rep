import React from 'react';

import style from "./style.css";
import {
    white,
    black,
    magnit,
    connector,
    classicK,
    miniK
} from '../../asset/index'
import {Footer, Head, Lot} from '../../components';

class Complete extends React.Component {
    render() {
        return (
            <div id={"wrapper"}>
                <div className={style.focusWrapper} id={"focus-wrapper"}>
                    <div className={style.page}>
                        <Head/>
                        <div className={style.wrap}>
                            <Lot title={"Шланг белый"} text={"Купить"} photo={white}/>
                            <Lot title={"Шланг черный"} text={"Купить"} photo={black}/>
                            <Lot title={"Неодовый магнит"} text={"Купить"} photo={magnit}/>
                            <Lot title={"Коннектор"} text={"Купить"} photo={connector}/>
                            <Lot title={"Колба Classc"} text={"Купить"} photo={classicK}/>
                            <Lot title={"Колба Mini"} text={"Купить"} photo={miniK}/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Complete;