import React from 'react';

import style from './style.css';

interface lotProps {
    title: string;
    tagline?: string;
    price?: string;
    click: any;
    text: string;
    photo: any;
}

const LotAlt: React.FC<lotProps> = ({ title, tagline, price, click, text, photo }) => (
    <div className={style.product}>
        <span className={style.productTitle}>{title}</span>
        <p>{tagline}</p>
        <span>{price}₽</span>
        <button onClick={click}>
            <span className={style.productBuy}>{text}</span>
        </button>
        <img src={photo} />
    </div>
);

export default LotAlt;
