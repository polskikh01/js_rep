import React from 'react';

import style from './style.css';

interface NavProps {
    title: string;
    link?: string;
};

const Nav: React.FC<NavProps> = ({ title, link}) => (
    <a className={style.navButt} href={link}>
        <span>{title}</span>
    </a>
);

export default Nav;