import React, {useState} from 'react';
import styles from './IconElement.module.scss';
import PropTypes from 'prop-types';

export const IconElement = ({img = '', alt = '', onClick}) => {

    const [active, setActive] = useState(false);

    return (
        <div className={styles.icon} onClick={() => {
            onClick && onClick();
            setActive(current => !current)
        }}>
            <img className={`${styles.img} ${active && styles.active}`}  src={img} alt={alt}/>
        </div>
    );
};

IconElement.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func
}



