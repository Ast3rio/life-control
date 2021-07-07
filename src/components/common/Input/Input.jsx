import React from 'react';
import styles from './Input.module.scss';

export const Input = ({type = "text", name}) => {
    return <input
        type={type}
        name={name}
        className={styles.input}
    />;
};

