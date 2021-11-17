import React from 'react'
import {useHistory} from 'react-router-dom'
import Input from "../common/Input"
import Button from "../common/Button"
import {connect} from "react-redux"
import {postCurrentUser, setUserEmail, setUserPassword} from "../../redux/action-creators/authCreators"
import {ContentWrapper} from "../../styled/Common.styled"
import {AuthButtonsWrapper, AuthFormWrapper} from "../../styled/forms/AuthForm.styled"
import {MediumTitle} from "../../styled/Titles.styled"
import {FormsLabel} from "../../styled/forms/CommonForms.styled"
import {refreshForm} from "../../utils/formsFunctional"

const AuthPageComponent = ({
                               email,
                               password,
                               setUserEmail,
                               setUserPassword,
                               postCurrentUser
                           }) => {

    const history = useHistory()
    const linkToRegister = () => history.push('/register')
    const post = () => postCurrentUser(email, password)

    return (
        <ContentWrapper onClick={refreshForm}>
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
                <AuthButtonsWrapper>
                    <Button
                        onClick={post}
                        label={'Log-in'}
                    />
                    <Button
                        onClick={linkToRegister}
                        label={'Register'}
                    />
                </AuthButtonsWrapper>
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
