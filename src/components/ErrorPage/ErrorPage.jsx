import React from 'react';
import styles from './ErrorPage.module.scss';
import {NavLink} from "react-router-dom";
import {MAIN_PAGE_ROUTE} from "../App/routes/routes-constants";

export const ErrorPage = ({error = 404}) => {
    return (
        <section className={styles.error}>
            Something go wrong with error status: {error}
            <NavLink to={MAIN_PAGE_ROUTE}>
                Return to Main Page
            </NavLink>
        </section>
    );
};


