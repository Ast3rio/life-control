import React from 'react';
import styles from './Header.module.scss';
import {HeaderLogo} from "./HeaderLogo/HeaderLogo";
import {connect} from "react-redux";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";

const HeaderComponent = ({header}) => {

    const {menu} = header;

    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderMenu menu={menu} />
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

export const Header = connect(mapStateToProps)(HeaderComponent);
