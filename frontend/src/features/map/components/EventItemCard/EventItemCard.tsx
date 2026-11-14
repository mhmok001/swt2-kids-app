import styles from './EventItemCard.module.scss';
import { useEffect, useState } from 'react';
import { Event, SelectEventIdProp } from '../../types/event.types';
import { dateFormatter } from '@/src/core/util/dateFormatter';

interface EventitemCardProps extends SelectEventIdProp {
    event: Event;
}

const EventItemCard: React.FC<EventitemCardProps> = ({ event, onSelectEventId }) => {
    const { id, title, startDate, endDate, imageUrl, address } = event;
    const { street, houseNumber, zipCode, city } = address;
    const [loaded, setLoaded] = useState(false);
    const startTime = dateFormatter(startDate);
    const endTime = dateFormatter(endDate);

    useEffect(() => {
        setLoaded(false);
    }, [imageUrl]);

    const handleOnClick = () => {
        onSelectEventId(id);
    };

    return (
        <div key={id}
            tabIndex={0}
            role='button'
            className={styles.eventItemCard}
            onClick={handleOnClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOnClick();
                }
            }}
        >
            {/* Platzhalter-DIV mit grauem Hintergrund und Icon */}
            <div className={styles.imageWrapper}>
                {/* {!loaded && (
                    <div className={styles.placeholder}>
                        <ImageIcon size={40} />
                    </div>
                )}

                {loaded && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className={`${styles.realImage} ${loaded ? styles.visible : ''}`}
                        onLoad={() => { setLoaded(true); console.log("in it onLoad") }}
                        onError={() => setLoaded(false)}
                    />
                )} */}
                <img
                    src={imageUrl}
                    alt={title}
                    onLoad={() => { setLoaded(true); console.log("in it onLoad") }}
                    onError={() => { setLoaded(false); console.log("in it onError") }}
                />
            </div>
            <span style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>{title}</span>
            <span style={{ fontSize: 14, fontWeight: '500', color: 'gray' }}>{`${startTime.date} - ${endTime.date}`}</span>
            <span style={{ fontSize: 14, fontWeight: '500', color: 'gray' }}>{`${startTime.time} - ${endTime.time} Uhr`}</span>
            <span style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{`${street} ${houseNumber}`}</span>
            <span style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{`${zipCode} ${city}`}</span>
        </div>
    );
}

export default EventItemCard;