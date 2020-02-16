// Dependencies
import React from 'react';

// Components
import Button from '../../UI/Button/Button';
import UserControl from './UserControl/UserControl';
import ListControl from './ListControl/ListControl';

// CSS
import styles from './UserControls.module.css';

// Layout

/**
 * <-------->
 * Favorites [movies[#ofmovies], tv[#ofshows]]
 * Rated [movies[#ofmovies], tv[#ofshows]]
 * Watchlist [movies[#ofmovies], tv[#ofshows]]
 * Lists [List of lists[#of movies/shows]]
 * <-------->
 */

const userControls = (props) => {
    return (
        <div className={styles.UserControls}>
            <UserControl category="Favorites" />
            <UserControl category="Rated" />
            <UserControl category="WatchList" />
            <ListControl />
            {/* <Button
                addClass={[styles.UpdatedButton]}
                type="Success"
                action="Show Favorites"
                clicked={() => props.showHandler('Favorites')}>Favorites</Button>
            <Button
                addClass={[styles.UpdatedButton]}
                type="Success"
                action="Show Rated"
                clicked={() => props.showHandler('Rated')}>Rated</Button>
            <Button
                addClass={[styles.UpdatedButton]}
                type="Success"
                action="Show WatchList"
                clicked={() => props.showHandler('WatchList')}>WatchList</Button>
            <Button
                addClass={[styles.UpdatedButton]}
                type="Success"
                action="Show Lists"
                clicked={() => props.showHandler('Lists')}>Lists</Button> */}
        </div>
    );
};

export default userControls;