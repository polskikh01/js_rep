import React from 'react';

import style from './style.css';
import { Footer, Head } from '../../components';

class Contacts extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <Head />
                <div className={style.wrap}>
                    <h1>Компания Calabash</h1>
                    <div className={style.contactInfo}>
                        <div className={style.contact}>
                            <span className={style.contactTitle}>
                                С удовольствием ответим на Ваши вопросы с 9:00 до 17:00 <br /> по
                                московскому времени
                            </span>
                            <span className={style.contactText} style={{ color: '#5DB8B2' }}>
                                +7 (777) 777 77 77
                            </span>
                            <span className={style.contactTitle}>
                                По вопросам гарантийного обслуживания
                            </span>
                            <span className={style.contactText}>support@gmail.com</span>
                            <span className={style.contactTitle}>По вопросам сотрудничества</span>
                            <span className={style.contactText} style={{ marginBottom: 0 }}>
                                ivanov.ivan@gmail.com
                            </span>
                            <span className={style.contactText}>Иванов Иван</span>
                        </div>
                        <div className={style.address}>
                            <span className={style.contactTitle}>Адрес</span>
                            <span className={style.contactText}>г. Москва, Красная площадь</span>
                        </div>
                        <div className={style.social}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                }}
                            >
                                <span className={style.contactTitle}>ВКонтакте</span>
                                <span className={style.contactText}>Calabash</span>
                                <span className={style.contactTitle}>Instagram</span>
                                <span className={style.contactText}>calabash</span>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                }}
                            >
                                <span className={style.contactTitle}>
                                    Новостной канал в Telegram
                                </span>
                                <span className={style.contactText}>@calabash_news</span>
                                <span className={style.contactTitle}>Чат с нами в Telegram</span>
                                <span className={style.contactText}>@calabash_chat</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contacts;
