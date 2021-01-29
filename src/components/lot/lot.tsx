import React from "react";
import {Link} from "react-router-dom";

import style from './style.css';
import {URLs} from '../../__data__/urls';

interface lotProps {
    title: string,
    tagline?: string,
    to?: string,
    text: string
    photo: any
}

const Lot: React.FC<lotProps> = ({title,
                                     tagline,
                                     to,
                                     text,
                                     photo}) => (
    <div className={style.product}>
        <span className={style.productTitle}>{title}</span>
        <p>{tagline}</p>
        <Link to={to}><span className={style.productBuy}>{text}</span></Link>
        <img src={photo}/>
    </div>
);

export default Lot;