import React from 'react';
import styles from './App.module.scss';
import Header from "../Header";
import AppRouter from "./AppRouter";

export const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.content}>
                <AppRouter />
            </main>
        </div>
    );
};
