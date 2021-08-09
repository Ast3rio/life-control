import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './FinancesPage.module.scss';
import Input from "../common/Input";
import {changeCommonMoneyValue, setCommonMoney} from "../../redux/action-creators/financesCreators";
import Button from "../common/Button";
import {getCurrency} from "../../redux/action-creators/actionCreators";
import Checkbox from "../common/Checkbox";

const FinancesComponent = ({
                               app,
                               finances,
                               setCommonMoney,
                               changeCommonMoneyValue
                           }) => {

    const {commonMoney, commonMoneyValue} = finances;
    const {currencyUSDtoUAH} = app;

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

    useEffect(() => {
        const commonMoney = localStorage.getItem('common_money');
        if (commonMoney) {
            setCommonMoney(+commonMoney);
        }
    }, [setCommonMoney])

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
                    <div className={styles.header__checkbox}>
                        <Checkbox/> USD
                        <Checkbox/> UAH
                    </div>
                    <Button
                        label={'Add money'}
                        onClick={() => addCommonMoney(commonMoney, commonMoneyValue)}
                    />
                </div>
                <div className={styles.header__common}>
                    <p className={styles.header__text}>
                        Common money: <span className={styles.accent}>{commonMoney * currencyUSDtoUAH} UAH</span>
                    </p>
                    <div className={styles.header__checkbox}>
                        <Checkbox/> USD
                        <Checkbox/> UAH
                    </div>
                </div>
            </header>
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
    getCurrency
}

export const Finances = connect(mapStateToProps, mapDispatchToProps)(FinancesComponent);
