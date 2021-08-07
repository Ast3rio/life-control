import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';

export const Input = ({
                          type = "text",
                          name,
                          value,
                          defaultValue,
                          onChange,
                          validationSettings = {},
                            validationType
                      }) => {

    const {minLength = 5, maxLength = 50} = validationSettings;

    class Validations {
        constructor(minLength, maxLength) {
            this.minLength = `Very short string. Min length ${minLength}`;
            this.maxLength = `Very long string. Max length ${maxLength}`;
            this.string = 'This must be a string';
        }

        setValidation(value) {
            if (value.length < minLength) {
                return this.minLength
            }
            if (value.length > maxLength) {
                return this.maxLength
            }
        }
    }

    class NumberValidation extends Validations {
        constructor(minLength, maxLength) {
            super(minLength, maxLength);
            this.number = 'This must be a number';
        }

        setValidation(value) {
            if(value === defaultValue) return ' ';
            if (isNaN(value)) {
                return this.number
            }
            return super.setValidation(value);
        }
    }

    const onFocus = () => {
        if (value === defaultValue) {
            onChange('')
        }
    }

    const onBlur = () => {
        if (value === '') {
            onChange(defaultValue);
        }
    }

    return <div>
        <input
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.input}
            onFocus={onFocus}
            onBlur={onBlur}
        />
        {validationType === 'number' && <div>{new NumberValidation(minLength, maxLength).setValidation(value)}</div> }
    </div>
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    validationType: PropTypes.string,
    validationSettings: PropTypes.object,
    onChange: PropTypes.func
}
