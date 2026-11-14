import * as Collapsible from '@radix-ui/react-collapsible';
import styles from './LocationContainer.module.scss';
import { ChevronLeft, ChevronRight, MapPin, Clock, Phone, Earth, AtSign, Calendar, House } from 'lucide-react';
import { Event } from '@/src/features/map/types/event.types';
import { dateFormatter } from '@/src/core/util/dateFormatter';
import React, { JSX } from 'react';
import { EVENT_CATEGORY } from '@/src/features/map/types/eventCategoryItems';


interface LocationContainerProps {
  isOpen: boolean;
  isNavigationSidebarOpen: boolean;
  item: Event | undefined;
  onOpenChange: () => void;
}

export interface SidebarContentProps {
  onOpenChange: () => void;
}

const LocationContainer: React.FC<LocationContainerProps> = ({
  isOpen,
  isNavigationSidebarOpen,
  item,
  onOpenChange,
}) => {
  const { id, categoryId, title, description, imageUrl } = item ?? {};
  const category = EVENT_CATEGORY.find(e => e.id === categoryId);
  
  const containerClasses = [
    styles.sidebar,
    isNavigationSidebarOpen ? styles.parentSidebarExpanded : styles.parentSidebarCollapsed,
  ].filter(Boolean).join(' ');

  const RenderCallback = (): JSX.Element => (
    <div className={styles.emptyState}>
      <span>Kein Event ausgewählt</span>
    </div>
  )
  
  return (
    <>
      {/* Header Section */}
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.headerTitleWrapper}>
            <Collapsible.Trigger asChild>
              <button
                className={styles.headerNavButton}
                onClick={onOpenChange}
              >
                <ChevronLeft size={20} color='#707070' />
              </button>
            </Collapsible.Trigger>
          </div>
        </div>
        <div className={styles.headerTitleContainer}>
          <span className={styles.label}>{title}</span>
          <span className={styles.headerSubtitle}>{category?.name}</span>
        </div>
      </header>
      <Collapsible.CollapsibleContent className={styles.content}>
        {item ? (
          <>
            {/* Deine normale Sidebar */}
            <section className={styles.imageContainer}>
              <img src={imageUrl} alt={title} />
            </section>
            <section className={styles.descriptionContainer}>
              <span className={styles.label}>Info</span>
              <div className={styles.description}>{description}</div>
            </section>
            <DetailInfoList title={'Details'} item={item} />
            <UsefulInformation item={item} />
          </>
        ) : (
          <RenderCallback />
        )}
      </Collapsible.CollapsibleContent>
    </>
  );
};

export default LocationContainer;

const Header: React.FC<{ title: string, onClick?: () => void }> = ({ title, onClick }) => (
  <div className={styles.headerButtonContainer}>
    <span className={styles.headerTitel}>{title}</span>
    {onClick && <ChevronRight onClick={onClick} />}
  </div>
);

interface SeactionProps {
  title: string;
  item: Event;
}

const DetailInfoList: React.FC<SeactionProps> = ({ title, item, }) => {
  const { address, startDate, endDate, contactInformation } = item;
  const { mail, phone, website } = contactInformation ?? {};
  const { street, houseNumber, city, zipCode } = address;
  const formettedStartDate = dateFormatter(startDate);
  const formettedEndDate = dateFormatter(endDate);
  const isDateInterval = formettedStartDate.date === formettedEndDate.date;
  const displayedDate = isDateInterval ? formettedStartDate.date : `${formettedStartDate.date} - ${formettedEndDate.date}`;

  return (
    <section className={styles.detailContainer} style={{ padding: 20 }}>
      <span className={styles.label}>{title}</span>
      <ul className={styles.listWrapper}>
        <li>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <House size={20} />
            </div>
            <span>{item.organizer}</span>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <MapPin size={20} />
            </div>
            <span>{`${street} ${houseNumber}, ${zipCode} ${city}`}</span>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <Calendar size={20} />
            </div>
            <span>{displayedDate}</span>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <Clock size={20} />
            </div>
            <span>{`${formettedStartDate.time} Uhr - ${formettedEndDate.time} Uhr`}</span>
          </div>
        </li>

        {mail &&
          <li>
            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <AtSign size={20} />
              </div>
              <a target='_blank' href={`mailto:${mail}`} className={styles.linking}>{mail}</a>
            </div>
          </li>
        }
        {phone &&
          <li>
            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <Phone size={20} />
              </div>
              <span className={styles.linking}>{phone}</span>
            </div>
          </li>
        }
        {website &&
          <li>
            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <Earth size={20} />
              </div>
              <a target='_blank'
                href={`https://${website}`}
                className={styles.linking}
              >
                {website}</a>
            </div>
          </li>
        }
      </ul>
    </section>
  );
};

const UsefulInformation: React.FC<{ item: Event }> = ({ item }) => (
  <section className={styles.detailContainer}>
    <div className={styles.infoContainer}>
      <div className={styles.infoItem}>
        <span className={styles.title}>Altersgruppe</span>
        <span className={styles.description}>Von 3 bis 6 Jahre</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.title}>Sprache</span>
        <span className={styles.description}>Deutsch</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.title}>Kosten</span>
        <span className={styles.description}>Eine Kurseinheit kostet 9 €</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.title}>Anmeldung</span>
        <span className={styles.description}>Erforderlich </span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.title}>Angebots Art</span>
        <span className={styles.description}>Kurs / Workshop </span>
      </div>
    </div>
  </section >
);