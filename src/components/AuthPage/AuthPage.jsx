import React from 'react';
import styles from './AuthPage.module.scss';
import Input from "../common/Input";
import Button from "../common/Button";

export const AuthPage = () => {
    return (
        <section className={styles.auth}>
            <form className={styles.form}>
                <h3 className={styles.title}>Auth</h3>
                <label htmlFor='login'>Log-in</label>
                <Input name='login' />
                <label htmlFor='password'>Password</label>
                <Input name='password' />
                <Button label='Log-in' className={styles.auth_btn}/>
            </form>
        </section>
    );
};
