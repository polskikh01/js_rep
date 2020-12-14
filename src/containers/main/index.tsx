import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/nav/nav';

import style from "./style.css";
import {basket} from "../../asset/index";

class Main extends React.Component {
    render() {
        return (
            <div id={"wrapper"}>
                <div className={style.focusWrapper} id={"focus-wrapper"}>
                    <div className={style.page}>
                        <header className={style.mHeader}>
                            <div className={style.menuHeader}>
                                <div className={style.menu}>
                                    <a className={style.logo}>
                                        <span className={style.lSText}>
                                            Calabash
                                        </span>
                                    </a>
                                    <nav className={style.navP}>
                                        <Nav title="Продукты"/>
                                        <Nav title="Доставка и оплата"/>
                                        <Nav title="Контакты"/>
                                    </nav>
                                    <div className={style.basket}>
                                        <img src={basket} alt="Basket"/>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className={style.wrap}>
                            <div>
                                <section>
                                    <div className={style.info}>
                                        <div className={style.infoPhoto}>
                                            123
                                        </div>
                                        <div className={style.infoText}>
                                            123
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
};

export default Main;
