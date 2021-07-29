import React from 'react';
import styles from './ShoppingList.module.scss';
import {MainTitle} from "../common/MainTitle/MainTitle";
import {checkIcon} from "../../assets/iconsConstants";

export const ShoppingList = () => {
    return (
        <section className={styles.shopping_list}>
            <MainTitle title={'Shopping list'} />
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <img className={styles.img} src={checkIcon} alt="check"/>
                </li>
                <li className={styles.list_item}>

                </li>
            </ul>
        </section>
    );
};
