export const changeCommonMoney = ({currencyType, common, currency, changeCurrencyType, setCommonMoney}) => {
    let result
    if (currencyType === 'USD') {
        result = common / currency;
    }
    if (currencyType === 'UAH') {
        result = common * currency;
    }
    result = Math.round(result * 100) / 100
    changeCurrencyType(currencyType)
    setCommonMoney(result)
    localStorage.setItem('common_money', result.toString());
    localStorage.setItem('currency_type', currencyType);
}