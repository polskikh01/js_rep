import React from 'react';
import cn from 'classnames';

import style from './style.css';

interface NavProps {
    title: string;
};

const Nav: React.FC<NavProps> = ({ title}) => (
    <a className={style.navButt}>
        {title}
    </a>
);

export default Nav;