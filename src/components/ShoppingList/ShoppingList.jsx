import React from 'react';
import styles from './ShoppingList.module.scss';
import {MainTitle} from "../common/MainTitle/MainTitle";
import {checkIco, crossIco, likeIco} from "../../assets/iconsConstants";
import {IconElement} from "../common/IconElement/IconElement";

export const ShoppingList = () => {
    return (
        <section className={styles.shopping_list}>
            <MainTitle title={'Shopping list'} />
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <IconElement img={checkIco} alt='check' filter='main'/>
                    <IconElement img={crossIco} alt='cross'/>
                    <IconElement img={likeIco} alt='like' filter='red'/>
                </li>
            </ul>
        </section>
    );
};
