import React from 'react';
import {CheckboxElement, CheckboxWrapper} from "../../../styled/Checkbox.styled";

export const Checkbox = ({type, status, onClick}) => {
    return (
        <CheckboxWrapper
             onClick={onClick}
        >
            <CheckboxElement
                type={type}
                status={status}
            >
                <input type="checkbox"/>
            </CheckboxElement>
        </CheckboxWrapper>
    );
};
