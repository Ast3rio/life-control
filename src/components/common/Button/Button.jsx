import React from 'react';
import styles from './Button.module.scss';

export const Button = ({disabled = false, onClick, label}) => {
    return <button
        className={styles.btn}
        disabled={disabled}
        onClick={onClick}
    >
        {label}
    </button>;
};
