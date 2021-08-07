import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './FinancesPage.module.scss';
import {Input} from "../common/Input/Input";
import {changeCommonMoneyValue, setCommonMoney} from "../../redux/action-creators/financesCreators";
import {Button} from "../common/Button/Button";

const FinancesComponent = ({
                               finances,
                               setCommonMoney,
                               changeCommonMoneyValue
                           }) => {

    const {commonMoney, commonMoneyValue} = finances;

    const addCommonMoney = (state, value) => {
        if(state === 0){
            setCommonMoney(+value);
            localStorage.setItem('common_money', value.toString());
        }
        if(state !== 0){
            let result = +state + +value;
            setCommonMoney(result);
            localStorage.setItem('common_money', result.toString());
        }
    }

    useEffect(() => {
        const commonMoney = localStorage.getItem('common_money');
        if(commonMoney){
            setCommonMoney(+commonMoney);
        }
    }, [setCommonMoney])

    return (
        <section className={styles.finances}>
            <header className={styles.header}>
                <Input
                    value={commonMoneyValue}
                    defaultValue={'Add money...'}
                    onChange={changeCommonMoneyValue}
                />
                <Button
                    label={'Add money'}
                    onClick={() => addCommonMoney(commonMoney, commonMoneyValue)}
                />
                {commonMoney}
            </header>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        finances: state.finances
    }
}

const mapDispatchToProps = {
    setCommonMoney,
    changeCommonMoneyValue
}

export const Finances = connect(mapStateToProps, mapDispatchToProps)(FinancesComponent);
