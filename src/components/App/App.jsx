import React, {useEffect} from 'react';
import styles from './App.module.scss';
import Header from "../Header";
import AppRouter from "./AppRouter";
import {useDispatch, useSelector} from "react-redux";
import {getCurrency} from "../../redux/action-creators/actionCreators";
import {loaderIco} from "../../assets/iconsConstants";
import {Container, ContentWrapper} from "../../styled/Common.styled";

export const App = () => {

    const app = useSelector(state => state.app);
    const {loading, error} = app;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrency('USD', 'UAH'))
    }, [dispatch])

    if (loading) return <img src={loaderIco} alt="loader"/>
    if (error) return error

    return (
        <div className={styles.app}>
            <Header/>
            <Container>
                <ContentWrapper>
                    <AppRouter/>
                </ContentWrapper>
            </Container>
        </div>
    );
};
