import React from 'react';
import styles from './App.module.scss';
import Header from "../Header";

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.content}>

            </main>
        </div>
    );
};
