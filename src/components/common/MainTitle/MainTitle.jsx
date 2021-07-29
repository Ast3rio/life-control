import React from 'react';
import styles from './MainTitle.module.scss';

export const MainTitle = ({title}) => {
    return <h2 className={styles.title}>{title}</h2>
};

