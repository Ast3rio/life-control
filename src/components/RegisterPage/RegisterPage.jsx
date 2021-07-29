import React from 'react';
import styles from './RegisterPage.module.scss';
import Input from "../common/Input";
import Button from "../common/Button";
import {connect} from "react-redux";
import {postNewUser, setUserEmail, setUserPassword} from "../../redux/action-creators/authCreators";

const RegisterPageComponent = ({
                                   email,
                                   password,
                                   postNewUser,
                                   setUserEmail,
                                   setUserPassword
                               }) => {
    return (
        <section className={styles.register}>
            <form className={styles.form}>
                <h3 className={styles.title}>Register</h3>
                <label htmlFor='email'>Email</label>
                <Input name='email' value={email} onChange={(e) => setUserEmail(e.target.value)}/>
                <label htmlFor='password'>Password</label>
                <Input type='password' name='password' value={password}
                       onChange={(e) => setUserPassword(e.target.value)}/>
                <Button
                    label='Register'
                    className={styles.register_btn}
                    onClick={() =>
                        postNewUser(email, password)
                    }
                />
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
    postNewUser,
    setUserEmail,
    setUserPassword
}

export const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPageComponent);
