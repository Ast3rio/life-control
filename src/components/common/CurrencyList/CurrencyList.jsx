import React from 'react';
import styles from './CurrencyList.module.scss';

export const CurrencyList = ({currency, date}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.currency}>
                USD: {currency}
            </div>
            <div className={styles.time}>
                update: {date || 'didn`t update'}
            </div>
        </div>
    );
};

