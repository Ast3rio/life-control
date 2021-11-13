import React from 'react';
import PropTypes from 'prop-types';
import {MainButton} from "../../../styled/Buttons.styled";

export const Button = ({disabled = false, onClick, label}) => {
    return <MainButton
        disabled={disabled}
        onClick={onClick}
    >
        {label}
    </MainButton>;
};

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}
