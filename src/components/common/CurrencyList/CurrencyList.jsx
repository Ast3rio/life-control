import React from 'react';
import styles from './CurrencyList.module.scss';

export const CurrencyList = ({currency, date}) => {
    return (
        <div className={styles.currency}>
            USD: {currency} update: {date || 'didn`t update'}
        </div>
    );
};

