import React, {useEffect} from 'react';
import styles from './App.module.scss';
import Header from "../Header";
import AppRouter from "./AppRouter";
import {useDispatch, useSelector} from "react-redux";
import {getCurrency} from "../../redux/action-creators/actionCreators";
import {loaderIco} from "../../assets/iconsConstants";

export const App = () => {

    const app = useSelector(state => state.app);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrency('USD', 'UAH'))
    }, [dispatch])

    const {loading, error} = app;

    return (
        <div className={styles.app}>
            <Header/>
            <div className="container">
                <main className={styles.content}>
                    {loading ? <div><img src={loaderIco} alt="loader"/></div> :
                        error ? <div>{error}</div> :
                            <AppRouter/>}
                </main>
            </div>
        </div>
    );
};
