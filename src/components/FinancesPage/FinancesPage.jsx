import React from 'react';
import {connect} from "react-redux";
import styles from './FinancesPage.module.scss';

const FinancesComponent = () => {
    return (
        <section className={styles.finances}>
            Finances
        </section>
    );
};

export const FinancesPage = connect()(FinancesComponent);
