import React from 'react';

import style from './style.css';

interface basketLotProps {
    img: any;
    title: string;
    price: string;
}

const BasketLot: React.FC<basketLotProps> = ({ img, title, price }) => (
    <div className={style.basketLot}>
        <div className={style.lot}>
            <img src={img} />
            <span>{title}</span>
            <span>{price}₽</span>
        </div>
    </div>
);

export default BasketLot;
