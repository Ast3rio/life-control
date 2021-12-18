import React, {useEffect} from 'react';
import Header from "../Header";
import {AppRouter} from "./AppRouter";
import {useDispatch, useSelector} from "react-redux";
import {getCurrency} from "../../redux/action-creators/actionCreators";
import {loaderIco} from "../../assets/iconsConstants";
import {Container, ContentWrapper, ContextFlexWrapper} from "../../styled/Common.styled";
import {Sidebar} from "../common/Sidebar/Sidebar";
import {CurrencyList} from "../common/CurrencyList/CurrencyList";

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
        <ContentWrapper>
            <Header/>
            <Container>
                <ContentWrapper>
                    <ContextFlexWrapper>
                        <AppRouter/>
                        <Sidebar>
                            <CurrencyList currency={app.currencyUSDtoUAH}/>
                        </Sidebar>
                    </ContextFlexWrapper>
                </ContentWrapper>
            </Container>
        </ContentWrapper>
    );
};

