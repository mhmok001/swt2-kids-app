import { Event, SelectEventIdProp } from "../../types/event.types";
import EventItemCard from "../EventItemCard/EventItemCard";
import styles from './EventListView.module.scss';

interface EventListProps extends SelectEventIdProp {
    items: Array<Event>;
}
const EventListView: React.FC<EventListProps> = ({ items, onSelectEventId }) => (
    <>
        {items.length === 0
            ?
            <span style={{ color: 'black', textAlign: 'center' }}>Keine Enträge</span>
            :
            <div className={styles.eventContainer}>
                <div className={styles.eventWrapper}>
                    {items.map((event, index) => (
                        <EventItemCard
                            key={index}
                            event={event}
                            onSelectEventId={onSelectEventId}
                        />
                    ))}
                </div>
            </div>
        }
    </>
);

export default EventListView; 