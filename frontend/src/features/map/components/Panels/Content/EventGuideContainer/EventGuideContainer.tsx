
import styles from './EventGuideContainer.module.scss';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import React, { useState } from 'react';
import { ContentPanelView, DetailsPanelView } from '../../../../types/navigation.types';
import { Collapsible } from 'radix-ui';
import { ONE_CARD_ITEM, TWO_CARD_ITEM } from '../../../../types/itemCard';
import { SelectEventIdProp } from '../../../../types/event.types';
import Slider from '../../../Slider/Slider';
import { EVENT_ITEMS } from '@/src/features/map/types/eventItems';
import EventListView from '../../../EventListView/EventListView';

interface EventGuideContainerProps extends SelectEventIdProp {
    onOpenChange: () => void;
    selectedDetail: (detail: DetailsPanelView) => void;
}

const EventGuideContainer: React.FC<EventGuideContainerProps> = ({
    onOpenChange,
    onSelectEventId,
    selectedDetail
}) => {
    const [showEventList, setShowEventList] = useState<boolean>(false);

    const handleShowEventList = () => {
        setShowEventList(prev => !prev);
    };

    return (
        <>
            <header style={{ paddingTop: 20, paddingRight: 20, paddingLeft: 20 }}>
                <div className={styles.header}>
                    <div className={styles.headerTitleWrapper}>
                        {showEventList &&
                            <button className={styles.headerNavButton}
                                onClick={handleShowEventList}>
                                <ChevronLeft size={20} color='#707070' />
                            </button>
                        }
                        <span className={styles.label}>{ContentPanelView.EVENT_GUIDE}</span>
                    </div>
                    <button
                        style={{ display: 'flex', width: 26, height: 26, backgroundColor: '#E2E2E3', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}
                        onClick={onOpenChange}>
                        <X size={20} color='#707070' />
                    </button>


                </div>
            </header>

            <Collapsible.Content className={styles.content}>

                {showEventList
                    ?
                    <EventListView
                        items={EVENT_ITEMS}
                        onSelectEventId={onSelectEventId}
                    />
                    :
                    <>
                        <section className={styles.contentContainer}>
                            <Header titel='Verstaltungen' onClick={handleShowEventList} />
                            <Slider mode='oneImage'>
                                {EVENT_ITEMS.map((event, index) => {
                                    const { id, title, imageUrl } = event;
                                    return (
                                        <img
                                            key={index}
                                            src={imageUrl}
                                            alt={title}
                                            onClick={() => onSelectEventId(id)}
                                        />
                                    );
                                })}
                            </Slider>
                        </section>
                        <section className={styles.contentContainer}>
                            <ActionList
                                title='Orte durchsuchen nach Veranstaltungen'
                                items={LOCATION_LIST_ITEMS}
                                onClick={selectedDetail}
                            />
                        </section>
                    </>

                }
            </Collapsible.Content>
        </>
    );
}

export default EventGuideContainer;

const Header: React.FC<{ titel: string, onClick?: () => void }> = ({ titel, onClick }) => (
    <div className={styles.headerButtonContainer}>
        <span className={styles.headerTitel}>{titel}</span>
        {onClick && <ChevronRight style={{ cursor: 'pointer' }} onClick={onClick} />}
    </div>
);

interface SeactionProps {
    title: string;
    items: Array<LocationListItem>;
    onClick: (detail: DetailsPanelView) => void;
}

const ActionList: React.FC<SeactionProps> = ({ title, items, onClick }) => (
    <div className={styles.notificationList}>
        <Header titel={title} />
        <ul className={styles.listWrapper}>
            {items.map((item) => (
                <li>
                    <div className={styles.listItem}>
                        <div className={styles.listItemLogo}>
                            <picture>
                                <img src={'/images/herne_logo.png'} alt={item.name} />
                            </picture>

                        </div>
                        <div className={styles.listItemInfo}>
                            <div className={styles.listItemInfoTitle}>
                                {item.name}
                            </div>
                            <div className={styles.listItemInfoSubtitle}>
                                {item.subtitle}
                            </div>
                        </div>
                        <ChevronRight />
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const LocationListItem: React.FC<{ item: LocationListItem }> = ({ item }) => (
    <li>
        <div className={styles.listItem}>
            <div className={styles.listItemLogo}>
                <picture>
                    <img src={'/images/herne_logo.png'} alt={item.name} />
                </picture>

            </div>
            <div className={styles.listItemInfo}>
                <div className={styles.listItemInfoTitle}>
                    {item.name}
                </div>
                <div className={styles.listItemInfoSubtitle}>
                    {item.subtitle}
                </div>
            </div>
            <ChevronRight />
        </div>
    </li>
);

interface LocationListItem {
    id: string;
    name: string;
    subtitle: string
    companyLogo: string;
    label: string;
}

const LOCATION_LIST_ITEMS: Array<LocationListItem> = [
    {
        id: '1',
        companyLogo: '/images/herne_logo.png',
        name: 'Stadt Bibliothek Herne',
        subtitle: '3 Veranstaltungen',
        label: DetailsPanelView.LOCATION
    },
    {
        id: '2',
        companyLogo: '/images/herne_logo.png',
        name: 'Stadtmarketing Herne GmbH',
        subtitle: '2 Veranstaltungen',
        label: DetailsPanelView.LOCATION
    },
    {
        id: '3',
        companyLogo: '/images/herne_logo.png',
        name: 'Heimatmuseum Unser Fritz',
        subtitle: '1 Veranstaltungen',
        label: DetailsPanelView.LOCATION
    }
];
export type CardItem = {
    id: string;
    title: string;
    imageUrl: string;
}
