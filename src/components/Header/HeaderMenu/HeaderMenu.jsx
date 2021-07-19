import React from 'react';
import styles from './HeaderMenu.module.scss';
import {NavLink} from "react-router-dom";

export const HeaderMenu = ({menu}) => {
    return (
        <nav className={styles.menu}>
            {menu.map(({id, url, label}) =>
                <li key={id} className={styles.item}>
                    <NavLink
                        to={url}
                        className={styles.link}
                        activeClassName={styles.link_active}
                    >{label}</NavLink>
                </li>
            )}
        </nav>
    );
};

