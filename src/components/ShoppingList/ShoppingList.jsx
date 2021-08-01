import React from 'react';
import styles from './ShoppingList.module.scss';
import {MainTitle} from "../common/MainTitle/MainTitle";
import {connect} from "react-redux";
import {
    addNewShoppingListItem, changeNewListItemValue,
    deleteShoppingListElement,
    setDoneStatus,
    setLikeStatus
} from "../../redux/action-creators/shoppingCreators";
import PropTypes from 'prop-types';
import ListItem from "../common/ListItem";
import {Button} from "../common/Button/Button";
import {Input} from "../common/Input/Input";

const DEFAULT_ITEM_VALUE = 'Write item name...';

export const ShoppingListComponent = ({
                                          shoppingList,
                                          newListItemValue,
                                          deleteShoppingListElement,
                                          setLikeStatus,
                                          setDoneStatus,
                                          addNewShoppingListItem,
                                          changeNewListItemValue
                                      }) => {
    return (
        <section className={styles.shopping_list}>
            <MainTitle title={'Shopping list'}/>
            <div className={styles.functional}>
                <Input
                    name='item'
                    value={newListItemValue}
                    onChange={changeNewListItemValue}
                    defaultValue={DEFAULT_ITEM_VALUE}
                />
                <Button
                    label='Add new item'
                    onClick={() => {
                        addNewShoppingListItem(newListItemValue)
                        changeNewListItemValue(DEFAULT_ITEM_VALUE)
                    }}/>
            </div>
            {!!shoppingList.length ? <ul className={styles.list}>
                {shoppingList.map(({id, ...state}) =>
                    <ListItem
                        key={id}
                        id={id}
                        setLikeStatus={setLikeStatus}
                        setDoneStatus={setDoneStatus}
                        deleteElement={deleteShoppingListElement}
                        {...state}
                    />
                )}
            </ul> : 'You haven`t items in list'}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        shoppingList: state.shopping.shoppingList,
        newListItemValue: state.shopping.newListItemValue
    }
}

const mapDispatchToProps = {
    deleteShoppingListElement,
    setLikeStatus,
    setDoneStatus,
    addNewShoppingListItem,
    changeNewListItemValue
}

ShoppingListComponent.propTypes = {
    shoppingList: PropTypes.array,
    newListItemValue: PropTypes.string,
    deleteShoppingListElement: PropTypes.func,
    setLikeStatus: PropTypes.func,
    setDoneStatus: PropTypes.func,
    addNewShoppingListItem: PropTypes.func,
    changeNewListItemValue: PropTypes.func
}

export const ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingListComponent);
