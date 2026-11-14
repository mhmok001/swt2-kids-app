
import globalStyles from '@/src/core/styles/globals.module.scss';
import styles from './EventSearchCotainer.module.scss';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { X, ChevronLeft } from 'lucide-react';
import React, { JSX, useState } from 'react';
import { EventCategory, Event, SelectEventIdProps } from '../../../../types/event.types';
import { EVENT_ITEMS } from '../../../../types/eventItems';
import EventItemCard from '../../../EventItemCard/EventItemCard';
import { EVENT_CATEGORY } from '../../../../types/eventCategoryItems';
import { Collapsible } from 'radix-ui';
import { Autocomplete, SearchOption } from '@/src/features/map/components/AutocompleteSearchbar/AutocompleteSearchbar';
import EventListView from '../../../EventListView/EventListView';

interface EventSearchContainerProps extends SelectEventIdProps {
    onOpenChange: () => void;
}

const EventSearchContainer: React.FC<EventSearchContainerProps> = ({
    onOpenChange,
    selectedEventId,
    onSelectEventId
}) => {
    const [searchText, setSearchText] = useState<string>('');
    const [selectedEventCategory, setSelectedEventCategory] = useState<EventCategory | null>(null);
    const filteredEvents = EVENT_ITEMS.filter(
        (event) => event.categoryId === selectedEventCategory?.id
    );

    const handleSetSearchString = (input: string) => {
        if (input === '') {
            setSelectedEventCategory(null);
        }
        setSearchText(input);
    };

    const setEventCategory = (category: EventCategory): void => {
        setSelectedEventCategory(category);
        setSearchText(category.name);
    };

    const setEventId = (id: string): void => {
        onSelectEventId(id);
    };

    const clear = (): void => {
        setSearchText('');
        setSelectedEventCategory(null);
    };

    const RenderCategoryItems = (): JSX.Element => (
        <div className={styles.searchNearContent}>
            <span className={styles.titel}>Nach Kategorien</span>
            <div className={styles.searchNearbyItemContent}>
                {EVENT_CATEGORY.map((item, index) => {
                    const { name, color, icon } = item;
                    const IconComponent = LucideIcons[icon] as LucideIcon | undefined;
                    return (
                        <div
                            key={index}
                            tabIndex={0}
                            className={styles.searchNearbyItem}
                            onClick={() => setEventCategory(item)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    setEventCategory(item);
                                }
                            }}
                        >
                            {IconComponent && (
                                <div style={{ backgroundColor: color }} className={styles.eventCategoryItem}>
                                    <IconComponent />
                                </div>
                            )}
                            <div className={styles.titel}>{name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );


    const RenderOrganisationItems = (): JSX.Element => (
        <div className={styles.searchNearContent}>
            <span className={styles.titel}>Nach Orten</span>
            <div className={styles.searchNearbyItemContent}>
                {EVENT_CATEGORY.map((item, index) => {
                    const { name, color, icon } = item;
                    const IconComponent = LucideIcons[icon] as LucideIcon | undefined;
                    return (
                        <div
                            key={index}
                            tabIndex={0}
                            className={styles.searchNearbyItem}
                            onClick={() => setEventCategory(item)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    setEventCategory(item);
                                }
                            }}
                        >
                            {IconComponent && (
                                <div style={{ backgroundColor: color }} className={styles.eventCategoryItem}>
                                    <IconComponent />
                                </div>
                            )}
                            <div className={styles.titel}>{name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const handleMappingEventToSearchOption = (events: Array<Event>) => {
        let searchOptions: Array<SearchOption> = [];
        events.forEach((event) => {

            searchOptions.push({
                id: event.id,
                title: event.title,
                toSearch: event.description + " " + event.title
            });
        });

        return searchOptions;
    };

    const handleSelectedItemId = (id: string | number) => {
        onSelectEventId(id.toString());
    };

    const searchOptions = handleMappingEventToSearchOption(EVENT_ITEMS);
    const item = EVENT_ITEMS.find(e => e.id === selectedEventId);

    return (
        <>
            {/* Header Section */}
            <header style={{ paddingTop: 20, paddingRight: 20, paddingLeft: 20 }}>
                <div className={styles.header}>
                    <div className={styles.headerTitleWrapper}>
                        {selectedEventCategory &&
                            <button className={styles.headerNavButton}
                                onClick={clear}>
                                <ChevronLeft size={20} color='#707070' />
                            </button>
                        }
                        <span className={styles.label}>Suchen</span>
                    </div>
                    {!selectedEventCategory &&
                        <button
                            className={globalStyles.iconButton}
                            onClick={onOpenChange}>
                            <X size={20} color='#707070' />
                        </button>
                    }
                </div>
                <div className={styles.searchbarContainer}>
                    <Autocomplete
                        searchOptions={searchOptions}
                        onClickOptionItem={handleSelectedItemId}
                        onClearId={() => onSelectEventId(null)}
                        value={searchText}
                        onChange={handleSetSearchString} onClearText={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                </div>
            </header>
            <Collapsible.Content forceMount className={styles.content}>
                {!selectedEventId && !selectedEventCategory &&
                    <RenderCategoryItems />
                }
                {(selectedEventCategory && !selectedEventId) &&
                    <EventListView items={filteredEvents} onSelectEventId={onSelectEventId} />
                }
                {item &&
                    <EventListView items={filteredEvents} onSelectEventId={onSelectEventId} />
                }
            </Collapsible.Content>
        </>
    );
}

export default EventSearchContainer;
