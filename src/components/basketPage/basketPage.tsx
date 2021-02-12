import React from 'react';

import style from './style.css';

import { Footer, Head } from '../../components';

const BasketPage: React.FC = ({ children }) => (
    <div className={style.page}>
        <Head />
        <div className={style.wrap}>{children}</div>
        <Footer />
    </div>
);

export default BasketPage;
