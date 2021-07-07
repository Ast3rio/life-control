import React from 'react';
import styles from './Button.module.scss';

export const Button = ({disabled = false, onClick, label, className = ''}) => {
    return <button
        className={`${styles.btn} ${className}`}
        disabled={disabled}
        onClick={onClick}
    >
        {label}
    </button>;
};
