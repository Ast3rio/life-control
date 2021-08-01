import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

export const Input = ({type = "text", name, value, defaultValue, onChange}) => {

    const onFocus = () => {
        if(value === defaultValue){
            onChange('')
        }
    }

    const onBlur = () => {
        if(value === ''){
            onChange(defaultValue);
        }
    }

    return <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        onFocus={onFocus}
        onBlur={onBlur}
    />
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
}
