import React from "react";

import style from './style.css';

interface lotProps {
    title: string,
    tagline: string,
    text: string
    photo: any
}

const Lot: React.FC<lotProps> = ({title,
                                     tagline,
                                     text,
                                     photo}) => (
    <div className={style.product}>
        <span className={style.productTitle}>{title}</span>
        <p>{tagline}</p>
        <span className={style.productBuy}>{text}</span>
        <img src={photo}/>
    </div>
);

export default Lot;