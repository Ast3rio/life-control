import React, {useState} from 'react';
import styles from './IconElement.module.scss';
import PropTypes from 'prop-types';

export const IconElement = ({img = '', alt = '', onClick, filter = '', status = false}) => {

    const [active, setActive] = useState(status);

    return (
        <div className={styles.icon} onClick={() => {
            onClick && onClick();
            setActive(current => !current)
        }}>
            {filter === 'main' && <img
                className={`${styles.img} ${active && styles.active_main}`}
                src={img} alt={alt}
            />}
            {filter === 'red' && <img
                className={`${styles.img} ${active && styles.active_red}`}
                src={img} alt={alt}
            />}
            {filter === '' && <img
                className={`${styles.img}`}
                src={img} alt={alt}
            />}
        </div>
    );
};

IconElement.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    filter: PropTypes.string,
    status: PropTypes.bool,
    onClick: PropTypes.func
}



