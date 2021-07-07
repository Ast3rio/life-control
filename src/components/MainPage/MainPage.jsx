import React from 'react';
import {connect} from "react-redux";
import styles from './MainPage.module.scss';

const MainPageComponent = () => {
    return (
        <section className={styles.main}>
            Main
        </section>
    );
};

export const MainPage = connect()(MainPageComponent);
