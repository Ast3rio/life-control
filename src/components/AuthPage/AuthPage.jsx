import React from 'react'
import styles from './AuthPage.module.scss'
import Input from "../common/Input"
import Button from "../common/Button"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {postCurrentUser, setUserEmail, setUserPassword} from "../../redux/action-creators/authCreators"
import {ContentWrapper} from "../../styled/Common.styled"
import {AuthFormWrapper} from "../../styled/forms/AuthForm.styled";
import {MediumTitle} from "../../styled/Titles.styled";
import {FormsLabel} from "../../styled/forms/CommonForms.styled";

const AuthPageComponent = ({
                               email,
                               password,
                               setUserEmail,
                               setUserPassword,
                               postCurrentUser
                           }) => {
    return (
        <ContentWrapper>
            <AuthFormWrapper>
                <MediumTitle>{'Auth'}</MediumTitle>
                <FormsLabel htmlFor='email'>{'Email'}</FormsLabel>
                <Input
                    value={email}
                    defaultValue='Write email...'
                    onChange={setUserEmail}
                    name='email'
                />
                <FormsLabel htmlFor='password'>{'Password'}</FormsLabel>
                <Input
                    value={password}
                    onChange={setUserPassword}
                    type='password'
                    name='password'
                />
                <div className={styles.buttons}>
                    <Button
                        onClick={() => {
                            postCurrentUser(email, password);
                        }}
                        label='Log-in'
                        className={styles.auth_btn}
                    />
                    <div className={styles.link}>
                        <NavLink to='/register'>Register</NavLink>
                    </div>
                </div>
            </AuthFormWrapper>
        </ContentWrapper>
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
