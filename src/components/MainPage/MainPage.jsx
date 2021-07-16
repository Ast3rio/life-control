import React from 'react';
import {connect} from "react-redux";
import styles from './MainPage.module.scss';



const MainPageComponent = () => {

    return (
        <section className={styles.main}>
            <img className={styles.ava} src="" alt=""/>
            <div className={styles.info}>
                
            </div>
        </section>
    );
};

export const MainPage = connect()(MainPageComponent);
