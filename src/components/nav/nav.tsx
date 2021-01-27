import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.css';

interface NavProps {
    title: string;
    link?: string;
};

const Nav: React.FC<NavProps> = ({ title, link}) => (
    <Link className={style.navButt} to={link}>
        <span>{title}</span>
    </Link>
);

export default Nav;