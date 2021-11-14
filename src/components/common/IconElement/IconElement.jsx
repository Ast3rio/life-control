import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {IconImage, IconWrapper} from "../../../styled/IconStyles.styled";

export const IconElement = ({img = '', alt = '', onClick, filter = '', status = false}) => {

    const [active, setActive] = useState(status);

    const handleClick = () => {
        onClick();
        setActive(current => !current)
    }

    return (
        <IconWrapper onClick={handleClick}>
            <IconImage
                src={img}
                alt={alt}
                filter={active && filter}
            />
        </IconWrapper>
    );
};

IconElement.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    filter: PropTypes.string,
    status: PropTypes.bool,
    onClick: PropTypes.func
}
