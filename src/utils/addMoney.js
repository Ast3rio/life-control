export const addMoney = (state, value, setMoney) => {
    if (state === 0) {
        setMoney(+value);
        localStorage.setItem('common_money', value.toString());
    }
    if (state !== 0) {
        let result = +state + +value;
        setMoney(result);
        localStorage.setItem('common_money', result.toString());
    }
}