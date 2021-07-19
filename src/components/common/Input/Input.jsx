import React from 'react';
import styles from './Input.module.scss';

export const Input = ({type = "text", name, value, onChange}) => {
    return <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
    />;
};

