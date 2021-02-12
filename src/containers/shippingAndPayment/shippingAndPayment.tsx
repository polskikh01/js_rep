import React from 'react';

import style from './style.css';
import { Footer, Head } from '../../components';

class ShippingAndPayment extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <Head />
                <div className={style.wrap}>
                    <h1>Информация о доставке и оплате</h1>
                    <div className={style.delivery}>
                        <span className={style.title}>Доставка</span>
                        <h5 style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '16px' }}>
                            По России:
                        </h5>
                        <div style={{ paddingLeft: '18px' }}>
                            <ul>
                                <li>Транспортной компанией СДЭК при наличии терминала в городе;</li>
                                <li>Почтой России;</li>
                                <li>Курьерской службой EMS;</li>
                            </ul>
                        </div>
                        <h5 style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '16px' }}>
                            Самовывоз:
                        </h5>
                        <div style={{ paddingLeft: '18px' }}>
                            <ul>
                                <li>Со склада: г. Москва, Красная площадь</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.payment}>
                        <span className={style.title}>Оплата</span>
                        <h5 style={{ paddingTop: '12px', paddingBottom: '12px', fontSize: '16px' }}>
                            Способ оплаты заказа в Интернет-магазине:
                        </h5>
                        <div style={{ paddingLeft: '18px' }}>
                            <ul>
                                <li>
                                    Электронным платежом через систему ROBOKASSA: Apple Pay, VISA,
                                    MasterCard, PayPal;
                                </li>
                                <li>
                                    Безналичный расчёт для юридических лиц и индивидуальных
                                    предпринимателей (если Вы зарегистрировались и авторизовались
                                    как ИП или юридическое лицо).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ShippingAndPayment;
