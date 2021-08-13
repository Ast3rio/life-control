import React from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox = ({type, status, onClick}) => {
    return (
        <div className={styles.checkbox}
             onClick={onClick}
        >
            <div className={`${styles.wrapper} ${type === status && styles.active}`}>
                <input type="checkbox"/>
            </div>
        </div>
    );
};

