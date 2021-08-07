import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export const Button = ({disabled = false, onClick, label, className = ''}) => {
    return <button
        className={`${styles.btn} ${className}`}
        disabled={disabled}
        onClick={(e) => {
            e.preventDefault();
            onClick && onClick();
        }}
    >
        {label}
    </button>;
};

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

