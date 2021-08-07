import React from 'react';
import styles from './App.module.scss';
import Header from "../Header";
import AppRouter from "./AppRouter";
import {useSelector} from "react-redux";

export const App = () => {

    const app = useSelector(state => state.app)

    const {loading, error} = app;

    return (
        <div className={styles.app}>
            <Header/>
            <div className="container">
                <main className={styles.content}>
                    {loading ? <div>loading...</div> :
                        error ? <div>{error}</div> :
                            <AppRouter/>}
                </main>
            </div>
        </div>
    );
};
