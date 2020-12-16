import React from 'react';
import { Link } from 'react-router-dom';

import {
    Head
} from '../../components/index'

import style from "./style.css";
import { infoPhoto} from "../../asset/index";

class Main extends React.Component {
    render() {
        return (
            <div id={"wrapper"}>
                <div className={style.focusWrapper} id={"focus-wrapper"}>
                    <div className={style.page}>
                        <Head/>
                        <div className={style.wrap}>
                            <div className={style.line}>
                                <section>
                                    <div className={style.info}>
                                        <div className={style.infoPhoto}/>
                                        <div className={style.infoText}>
                                            <div className={style.text}>
                                                <div className={style.textT}>
                                                    <span className={style.lSText}>
                                                        Calabash
                                                    </span>
                                                </div>
                                                <div className={style.textT}>
                                                    <span className={style.lSTextB}>
                                                        Твоя очередь <br/> создавать стиль
                                                    </span>
                                                </div>
                                                <div className={style.textT}>
                                                    <span className={style.lSTextA}>
                                                        Узнать больше
                                                    </span>
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
};

export default Main;
