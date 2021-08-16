import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './FinancesPage.module.scss';
import Input from "../common/Input";
import {
    changeCommonMoneyCurrency,
    changeCommonMoneyValue,
    setCommonMoney
} from "../../redux/action-creators/financesCreators";
import Button from "../common/Button";
import {getCurrency} from "../../redux/action-creators/actionCreators";
import Checkbox from "../common/Checkbox";

const FinancesComponent = ({
                               app,
                               finances,
                               setCommonMoney,
                               changeCommonMoneyValue,
                               changeCommonMoneyCurrency
                           }) => {

    const {commonMoney, commonMoneyValue, commonMoneyCurrency} = finances;
    const {currencyUSDtoUAH, currencyTimeUpdate} = app;

    const addCommonMoney = (state, value) => {
        if (state === 0) {
            setCommonMoney(+value);
            localStorage.setItem('common_money', value.toString());
        }
        if (state !== 0) {
            let result = +state + +value;
            setCommonMoney(result);
            localStorage.setItem('common_money', result.toString());
        }
    }

    const changeCommonMoney = (currency) => {
        let result
        if(currency === 'USD'){
            result = commonMoney / currencyUSDtoUAH;
        }
        if(currency === 'UAH'){
            result = commonMoney * currencyUSDtoUAH;
        }
        result = Math.round(result*100)/100
        changeCommonMoneyCurrency(currency)
        setCommonMoney(result)
        localStorage.setItem('common_money', result.toString());
        localStorage.setItem('currency', currency);
    }

    useEffect(() => {
        const commonMoney = localStorage.getItem('common_money');
        const currency = localStorage.getItem('currency');
        if (commonMoney) {
            setCommonMoney(+commonMoney);
        }
        if(currency) {
            changeCommonMoneyCurrency(currency);
        }
    }, [setCommonMoney, changeCommonMoneyCurrency])

    return (
        <section className={styles.finances}>
            <header className={styles.header}>
                <div className={styles.header__form}>
                    <div className={styles.header__input}>
                        <Input
                            value={commonMoneyValue}
                            defaultValue={'Add money...'}
                            onChange={changeCommonMoneyValue}
                        />
                    </div>
                    <Button
                        label={'Add common money'}
                        onClick={() => addCommonMoney(commonMoney, commonMoneyValue)}
                    />
                </div>
                <div className={styles.header__common}>
                    <p className={styles.header__text}>
                        Common money:
                        <span className={styles.accent}>
                            { commonMoneyCurrency === 'USD' ? `${commonMoney} USD` : `${commonMoney} UAH`}
                        </span>
                    </p>
                    <div className={styles.header__checkbox}>
                        <Checkbox
                            type={'USD'}
                            status={commonMoneyCurrency}
                            onClick={() => changeCommonMoney('USD')}
                        /> USD
                        <Checkbox
                            type={'UAH'}
                            status={commonMoneyCurrency}
                            onClick={() => changeCommonMoney('UAH')}
                        /> UAH
                    </div>
                </div>
            </header>
            USD: {currencyUSDtoUAH} update: {currencyTimeUpdate}
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
