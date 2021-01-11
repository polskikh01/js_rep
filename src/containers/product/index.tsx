import React from 'react';

import style from "./style.css";
import {
    Head
} from '../../components/index'

class Product extends React.Component {
    render() {
        return (
            <div id={"wrapper"}>
                <div className={style.focusWrapper} id={"focus-wrapper"}>
                    <div className={style.page}>
                        <Head/>
                        <div className={style.wrap}>

                        </div>
                        <footer className={style.footerM}>
                            <div className={style.footerContainer}>
                                <span>
                                    Calabash
                                </span>
                            </div>
                            <div className={style.footerContainer}>
                                Продукция
                            </div>
                            <div className={style.footerContainer}>
                                Аккаунт
                            </div>
                            <div className={style.footerContainer}>
                                Помощь
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
};

export default Product;