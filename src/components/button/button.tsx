import React from 'react'
import cn from 'classnames'

import style from './style.css'

interface ButttonProps {
    colorScheme: 'purple' | 'blue';
    onClick: () => void;
}

const Button: React.FC<ButttonProps> = ({ colorScheme, children, onClick }) => (
    <button className={cn(style.main, style[colorScheme])}>{children}</button>
)

export default Button;
