import React from 'react';
import Input from "../common/Input";
import Button from "../common/Button";
import {connect} from "react-redux";
import {postNewUser, setUserEmail, setUserPassword} from "../../redux/action-creators/authCreators";
import {ContentWrapper} from "../../styled/Common.styled";
import {AuthButtonsWrapper, AuthFormWrapper} from "../../styled/forms/AuthForm.styled";
import {refreshForm} from "../../utils/formsFunctional";
import {MediumTitle} from "../../styled/Titles.styled";
import {FormsLabel} from "../../styled/forms/CommonForms.styled";

const RegisterPageComponent = ({
                                   email,
                                   password,
                                   postNewUser,
                                   setUserEmail,
                                   setUserPassword
                               }) => {

    const post = () => postNewUser(email, password)

    return (
        <ContentWrapper>
            <AuthFormWrapper onClick={refreshForm}>
                <MediumTitle>{'Register'}</MediumTitle>
                <FormsLabel htmlFor='email'>{'Email'}</FormsLabel>
                <Input
                    name='email'
                    value={email}
                    onChange={setUserEmail}
                />
                <FormsLabel htmlFor='password'>{'Password'}</FormsLabel>
                <Input
                    type='password'
                    name='password'
                    value={password}
                    onChange={setUserPassword}
                />
                <AuthButtonsWrapper>
                    <Button
                        label={'Register'}
                        onClick={post}
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
    postNewUser,
    setUserEmail,
    setUserPassword
}

export const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPageComponent);
