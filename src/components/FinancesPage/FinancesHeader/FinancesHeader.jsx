import React from 'react';
import styles from "../FinancesPage.module.scss";
import Input from "../../common/Input";
import Button from "../../common/Button";
import {addMoney} from "../../../utils/addMoney";
import Checkbox from "../../common/Checkbox";
import {changeCommonMoney} from "../../../utils/changeCommonMoney";

const FinancesHeader = ({
                            finances,
                            currency,
                            changeCurrency,
                            changeValue,
                            setMoney
                        }) => {

    const {commonMoney, commonMoneyValue, commonMoneyCurrency} = finances;

    return (
        <header className={styles.header}>
            <div className={styles.header__form}>
                <div className={styles.header__input}>
                    <Input
                        value={commonMoneyValue}
                        defaultValue={'Add money...'}
                        onChange={changeValue}
                    />
                </div>
                <Button
                    label={'Add common money'}
                    onClick={() => addMoney(commonMoney, commonMoneyValue, setMoney)}
                />
            </div>
            <div className={styles.header__common}>
                <p className={styles.header__text}>
                    Common money:
                    <span className={styles.accent}>
                        {commonMoneyCurrency === 'USD' ? `${commonMoney} USD` : `${commonMoney} UAH`}
                    </span>
                </p>
                <div className={styles.header__checkbox}>
                    <Checkbox
                        type={'USD'}
                        status={commonMoneyCurrency}
                        onClick={() => changeCommonMoney({
                            currencyType: 'USD',
                            currency: currency,
                            common: commonMoney,
                            changeCurrencyType: changeCurrency,
                            setCommonMoney: setMoney
                        })}
                    /> USD
                    <Checkbox
                        type={'UAH'}
                        status={commonMoneyCurrency}
                        onClick={() => changeCommonMoney({
                            currencyType: 'UAH',
                            currency: currency,
                            common: commonMoney,
                            changeCurrencyType: changeCurrency,
                            setCommonMoney: setMoney
                        })}
                    /> UAH
                </div>
            </div>
        </header>
    );
};

export default FinancesHeader;