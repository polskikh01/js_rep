import Nav from '@main/components/nav/nav';
import React from 'react';
import { Link } from 'react-router-dom';

import {

} from '../../components';

import style from "./style.css";

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
                                    <Nav
                                        isActive={true}
                                        title={"Продукты"}
                                    />
                                    <Nav
                                        isActive={false}
                                        title={"Поддержка"}
                                    />
                                    <Nav
                                        isActive={false}
                                        title={"B2B"}
                                    />
                                    <Nav
                                        isActive={false}
                                        title={"Доставка и оплата"}
                                    />
                                    <Nav
                                        isActive={false}
                                        title={"Контакты"}
                                    />
                                </div>
                            </div>
                        </header>
                        <div>

                        </div>
                        <footer>

                        </footer>
                    </div>
                </div>
            </div>
        );
    }
};

export default Main;
