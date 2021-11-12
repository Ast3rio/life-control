import React from 'react';
import {connect} from "react-redux";
import styles from './MainPage.module.scss';
import {CurrencyList} from "../common/CurrencyList/CurrencyList";
import {Sidebar} from "../common/Sidebar/Sidebar";

const MainPageComponent = ({app}) => {

    const {currencyUSDtoUAH, currencyTimeUpdate} = app;

    return (
        <section className={styles.main}>
            <div>Main</div>
            <Sidebar>
                <CurrencyList currency={currencyUSDtoUAH} date={currencyTimeUpdate} />
            </Sidebar>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

export const MainPage = connect(mapStateToProps)(MainPageComponent);
