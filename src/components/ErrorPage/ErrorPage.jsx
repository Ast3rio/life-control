import React from 'react';
import styles from './ErrorPage.module.scss';
import {NavLink} from "react-router-dom";
import {MAIN_PAGE_ROUTE} from "../App/routes/routes-constants";

export const ErrorPage = ({error = 404}) => {
    return (
        <section className={styles.error}>
            <p className={styles.text}>
                Something go wrong with error status:
                <div className={styles.error_text}>{error}</div>
            </p>
            <NavLink to={MAIN_PAGE_ROUTE} className={styles.link}>
                Return to Main Page
            </NavLink>
        </section>
    );
};


