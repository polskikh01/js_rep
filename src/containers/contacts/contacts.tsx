import React from 'react';

import style from './style.css';
import { Footer, Head } from '../../components';
import i18next from 'i18next';
import { I18nContext } from 'react-i18next';

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
                                {i18next.t('js_rep.contacts.qq1')} <br />{' '}
                                {i18next.t('js_rep.contacts.qq2')}
                            </span>
                            <span className={style.contactText} style={{ color: '#5DB8B2' }}>
                                +7 (777) 777 77 77
                            </span>
                            <span className={style.contactTitle}>
                                {i18next.t('js_rep.contacts.guarantee')}
                            </span>
                            <span className={style.contactText}>support@gmail.com</span>
                            <span className={style.contactTitle}>
                                {i18next.t('js_rep.contacts.cooperation')}
                            </span>
                            <span className={style.contactText} style={{ marginBottom: 0 }}>
                                ivanov.ivan@gmail.com
                            </span>
                            <span className={style.contactText}>
                                {i18next.t('js_rep.contacts.cooperation')}
                            </span>
                        </div>
                        <div className={style.address}>
                            <span className={style.contactTitle}>
                                {i18next.t('js_rep.contacts.address')}
                            </span>
                            <span className={style.contactText}>
                                {i18next.t('js_rep.contacts.GPS')}
                            </span>
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
                                    {i18next.t('js_rep.contacts.newsT')}
                                </span>
                                <span className={style.contactText}>@calabash_news</span>
                                <span className={style.contactTitle}>
                                    {i18next.t('js_rep.contacts.chatT')}
                                </span>
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
