import React, {useState} from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox = () => {

    const [active, setActive] = useState();

    return (
        <div className={styles.checkbox}
             onClick={() => setActive(current => !current)}
        >
            <div className={`${styles.wrapper} ${active && styles.active}`}>
                <input type="checkbox"/>
            </div>
        </div>
    );
};

