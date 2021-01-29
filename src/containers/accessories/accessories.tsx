import React from 'react';

import style from "./style.css";
import {
    killerM,
    glinaClassic,
    glinaMini
} from '../../asset/index';
import {Footer, Head, Lot} from '../../components';

class Accessories extends React.Component {
    render() {
        return (
            <div id={"wrapper"}>
                <div className={style.focusWrapper} id={"focus-wrapper"}>
                    <div className={style.page}>
                        <Head/>
                        <div className={style.wrap}>
                            <Lot title={"Killer M"} text={"Купить"} photo={killerM}/>
                            <Lot title={"Glina Classic"} text={"Купить"} photo={glinaClassic}/>
                            <Lot title={"Glina Mini"} text={"Купить"} photo={glinaMini}/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Accessories;