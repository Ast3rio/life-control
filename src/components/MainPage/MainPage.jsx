import React from 'react';
import {connect} from "react-redux";
import styles from './MainPage.module.scss';



const MainPageComponent = () => {

    return (
        <section className={styles.main}>
            <div className={styles.info}>
                Це головна на якій повинно бути дуже багато корисноЇ інфи, але я ще не знаю якоЇ
            </div>
        </section>
    );
};

export const MainPage = connect()(MainPageComponent);
