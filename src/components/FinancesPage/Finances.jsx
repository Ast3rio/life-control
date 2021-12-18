import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './FinancesPage.module.scss';
import {
    changeCommonMoneyCurrency,
    changeCommonMoneyValue,
    setCommonMoney
} from "../../redux/action-creators/financesCreators";
import {getCurrency} from "../../redux/action-creators/actionCreators";
import FinancesHeader from "./FinancesHeader/FinancesHeader";

const FinancesComponent = ({
                               app,
                               finances,
                               setCommonMoney,
                               changeCommonMoneyCurrency,
                               changeCommonMoneyValue
                           }) => {

    const {currencyUSDtoUAH} = app;

    useEffect(() => {
        const commonMoney = localStorage.getItem('common_money');
        const currency = localStorage.getItem('currency_type');
        if (commonMoney) {
            setCommonMoney(+commonMoney);
        }
        if (currency) {
            changeCommonMoneyCurrency(currency);
        }
    }, [setCommonMoney, changeCommonMoneyCurrency])

    return (
        <section className={styles.finances}>
            <FinancesHeader
                finances={finances}
                changeCurrency={changeCommonMoneyCurrency}
                changeValue={changeCommonMoneyValue}
                currency={currencyUSDtoUAH}
                setMoney={setCommonMoney}
            />
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        finances: state.finances,
        app: state.app
    }
}

const mapDispatchToProps = {
    setCommonMoney,
    changeCommonMoneyValue,
    getCurrency,
    changeCommonMoneyCurrency
}

export const Finances = connect(mapStateToProps, mapDispatchToProps)(FinancesComponent);
