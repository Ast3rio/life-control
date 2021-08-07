import React from 'react';
import {connect} from "react-redux";
import styles from './FinancesPage.module.scss';
import {Input} from "../common/Input/Input";

const FinancesComponent = () => {
    return (
        <section className={styles.finances}>
            <header className={styles.header}>
                <Input


                />
            </header>
        </section>
    );
};

export const Finances = connect()(FinancesComponent);
