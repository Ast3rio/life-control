import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

export const Input = ({type = "text", name, value, onChange}) => {
    return <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
    />;
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}
