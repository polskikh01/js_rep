import React from 'react';

import style from './style.css';

interface NavProps {
    title: string;
};

const Nav: React.FC<NavProps> = ({ title}) => (
    <a className={style.navButt}>
        <span>{title}</span>
    </a>
);

export default Nav;