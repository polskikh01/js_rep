import React from 'react';

import style from './style.css';
import {killerM, glinaClassic, glinaMini} from '../../asset/index';
import {Footer, Head, LotAlt} from '../../components';

import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

function Accessories() {
    // const {t, i18n} = useTranslation();

    return (
        <div className={style.page}>
            <Head/>
            <div className={style.wrap}>
                <LotAlt title={'Killer M'} price={'2750₽'} text={i18next.t('js_rep.BUY')} photo={killerM}/>
                <LotAlt title={'Glina Classic'} price={'800₽'} text={i18next.t('js_rep.BUY')} photo={glinaClassic}/>
                <LotAlt title={'Glina Mini'} price={'650₽'} text={i18next.t('js_rep.BUY')} photo={glinaMini}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Accessories;
