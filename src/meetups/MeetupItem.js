import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(data) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={data.image} alt={data.title} />
                </div>
                <div className={classes.content}>
                    <h3>{data.title}</h3>
                    <address>{data.address}</address>
                    <p>{data.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>To Favorites</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;