import React from 'react';
import styles from './Sidebar.module.scss';

export const Sidebar = ({children}) => {
    return (
        <aside className={styles.aside}>
            {children}
        </aside>
    );
};
