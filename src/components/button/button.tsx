import React from 'react';
import cn from 'classnames';

import { ButtonColors } from './model';
import style from './style.css';

interface ButttonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    colorScheme: ButtonColors;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButttonProps> = ({ colorScheme, children, className, ...rest }) => (
    <button {...rest} className={cn(style.main, style[colorScheme], className)}>
        {children}
    </button>
);

export default Button;
