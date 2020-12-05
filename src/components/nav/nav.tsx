import React from 'react';
import cn from 'classnames';

import style from './style.css';

interface NavProps {
    isActive: boolean;
    title: string;
    to?: string;
};

const Nav: React.FC<NavProps> = ({isActive, title, to}) => (
    <a className={style.navButt}>
        {title}
    </a>
);

export default Nav;