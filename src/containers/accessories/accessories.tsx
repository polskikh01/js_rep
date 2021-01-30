import React from 'react';

import style from "./style.css";
import {
    killerM,
    glinaClassic,
    glinaMini
} from '../../asset/index';
import {Footer, Head, LotAlt} from '../../components';

class Accessories extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <Head/>
                <div className={style.wrap}>
                    <LotAlt title={"Killer M"} price={"2750₽"} text={"Купить"} photo={killerM}/>
                    <LotAlt title={"Glina Classic"} price={"800₽"} text={"Купить"} photo={glinaClassic}/>
                    <LotAlt title={"Glina Mini"} price={"650₽"} text={"Купить"} photo={glinaMini}/>
                </div>
                <Footer/>
            </div>
        );
    }
};

export default Accessories;