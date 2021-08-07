import React from 'react';
import styles from './AuthPage.module.scss';
import Input from "../common/Input";
import Button from "../common/Button";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {postCurrentUser, setUserEmail, setUserPassword} from "../../redux/action-creators/authCreators";

const AuthPageComponent = ({
                               email,
                               password,
                               setUserEmail,
                               setUserPassword,
                               postCurrentUser
                           }) => {

    console.log(email)

    return (
        <section className={styles.auth}>
            <form className={styles.form}>
                <h3 className={styles.title}>Auth</h3>
                <label htmlFor='email'>Email</label>
                <Input
                    value={email}
                    defaultValue='Write email...'
                    onChange={setUserEmail}
                    name='email'
                />
                <label htmlFor='password'>Password</label>
                <Input value={password} onChange={setUserPassword} type='password'
                       name='password'/>
                <div className={styles.buttons}>
                    <Button
                        onClick={() => {
                            postCurrentUser(email,password);
                        }}
                        label='Log-in'
                        className={styles.auth_btn}
                    />
                    <div className={styles.link}>
                        <NavLink to='/register'>Register</NavLink>
                    </div>
                </div>
            </form>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

const mapDispatchToProps = {
    setUserEmail,
    setUserPassword,
    postCurrentUser
}

export const AuthPage = connect(mapStateToProps, mapDispatchToProps)(AuthPageComponent);
