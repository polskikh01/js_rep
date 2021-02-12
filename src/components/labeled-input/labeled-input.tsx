import React, { HTMLAttributes } from 'react';

import style from './style.css';

// лучше использовать TS
interface LabeledInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'id'> {
    id: string | number;
    name: string;
    label: string;
    type?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
    inputRef,
    label,
    id,
    name,
    type,
    ...rest
}) => (
    <div className={style.wrapper}>
        <label className={style.label} htmlFor={String(id)}>
            {label}
        </label>
        <input
            className={style.field}
            ref={inputRef}
            type={type}
            name={name}
            id={String(id)}
            {...rest}
        />
    </div>
);

LabeledInput.defaultProps = {
    type: 'text',
};
