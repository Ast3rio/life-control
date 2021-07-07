import React from 'react';
import {connect} from "react-redux";
import styles from './MainPage.module.scss';
import {Button} from "../common/Button/Button";
import {Input} from "../common/Input/Input";



const MainPageComponent = () => {

    const whyYouClick = () => {
        console.log('Why you click me?')
    }

    return (
        <section className={styles.main}>
            <div>Main</div>
            <Button label={'Click me'} onClick={whyYouClick} />
            <Input />
        </section>
    );
};

export const MainPage = connect()(MainPageComponent);
