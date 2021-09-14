import React from 'react';
import {connect} from "react-redux";
import styles from './MainPage.module.scss';
import {CurrencyList} from "../common/CurrencyList/CurrencyList";

const MainPageComponent = ({app}) => {

    const {currencyUSDtoUAH, currencyTimeUpdate} = app;

    return (
        <section className={styles.main}>
            <CurrencyList currency={currencyUSDtoUAH} date={currencyTimeUpdate} />
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

export const MainPage = connect(mapStateToProps)(MainPageComponent);
