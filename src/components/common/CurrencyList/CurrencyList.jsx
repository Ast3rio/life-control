import React from 'react';
import {CurrencyListWrapper} from "../../../styled/CurrencyListStyles.styled";

export const CurrencyList = ({currency, date}) => {
    return (
        <CurrencyListWrapper>
            <div>
                USD: {currency}
            </div>
            <div>
                update: {date || 'didn`t update'}
            </div>
        </CurrencyListWrapper>
    );
};

