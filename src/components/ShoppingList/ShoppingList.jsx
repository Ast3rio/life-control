import React from 'react';
import styles from './ShoppingList.module.scss';
import {MainTitle} from "../common/MainTitle/MainTitle";
import {checkIco, crossIco, likeIco} from "../../assets/iconsConstants";
import {IconElement} from "../common/IconElement/IconElement";
import {connect} from "react-redux";

export const ShoppingListComponent = ({shoppingList}) => {
    return (
        <section className={styles.shopping_list}>
            <MainTitle title={'Shopping list'} />
            <ul className={styles.list}>
                {shoppingList.map(({id, item}) =>
                    <li key={id} className={styles.list_item}>
                        <IconElement img={checkIco} alt='check' filter='main'/>
                        {item}
                        <IconElement img={crossIco} alt='cross'/>
                        <IconElement img={likeIco} alt='like' filter='red'/>
                    </li>
                )}
            </ul>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        shoppingList: state.shopping.shoppingList
    }
}

export const ShoppingList = connect(mapStateToProps)(ShoppingListComponent);
