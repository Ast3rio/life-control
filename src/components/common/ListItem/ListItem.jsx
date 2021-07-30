import React from 'react';
import styles from "./ListItem.module.scss";
import {IconElement} from "../IconElement/IconElement";
import {checkIco, crossIco, likeIco} from "../../../assets/iconsConstants";
import PropTypes from 'prop-types';

export const ListItem = ({
                             id,
                             item,
                             like,
                             done,
                             setLikeStatus,
                             setDoneStatus,
                             deleteElement
}) => {

    console.log(setDoneStatus)

    return (
        <li key={id} className={styles.list_item}>
            <IconElement
                status={done}
                img={checkIco}
                alt='check'
                filter='main'
                onClick={() => setDoneStatus(id, !done)}
            />
            {item}
            <div className={styles.icons}>
                <IconElement
                    img={crossIco}
                    alt='cross'
                    onClick={() => deleteElement(id)}
                />
                <IconElement
                    status={like}
                    img={likeIco}
                    alt='like'
                    filter='red'
                    onClick={() => setLikeStatus(id, !like)}
                />
            </div>
        </li>
    );
};

ListItem.propTypes = {
    id: PropTypes.number || PropTypes.string,
    item: PropTypes.string,
    like: PropTypes.bool,
    done: PropTypes.bool,
    setLikeStatus: PropTypes.func,
    setDoneStatus: PropTypes.func,
    deleteElement: PropTypes.func
}

