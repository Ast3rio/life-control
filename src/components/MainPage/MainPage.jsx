import React from 'react';
import {connect} from "react-redux";
import styles from './MainPage.module.scss';

const MainPageComponent = () => {
    return (
        <section className={styles.main}>
            <div>Main</div>
        </section>
    );
};

export const MainPage = connect(null)(MainPageComponent);
