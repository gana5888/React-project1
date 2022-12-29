import { Link } from "react-router-dom";
import classes from "./main-nav.module.css";
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';

export function MainNav() {
    
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}> React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/new'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites
                            <span className={classes.badge}>
                                {favoritesCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}