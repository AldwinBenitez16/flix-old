import React from 'react';

import Button from '../../../UI/Button/Button';

import styles from './UserControl.module.css';

/** Layout
 * <--------->
 * Favorites
 * Movie[#ofmovies]
 * Shows[#ofshows]
 * <--------->
 */

const userControl = ({ category }) => {
    return (
        <div className={styles.UserControl}>
            <header>{category}</header>
            <Button
                addClass={[styles.UpdatedButton]}
                type="Success"
                action="Show Movies"
                clicked={() => console.log("Show Movies")}>Movies (0)</Button>
            <Button
                addClass={[styles.UpdatedButton]}
                type="Success"
                action="Show Tv Shows"
                clicked={() => console.log("Show Tv Shows")}>Tv Shows (0)</Button>
        </div>
    );
};

export default userControl;