import { Link } from "react-router-dom";
import classes from "./main-nav.module.css"

export function MainNav() {
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
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}