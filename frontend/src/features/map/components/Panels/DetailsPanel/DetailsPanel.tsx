import * as Collapsible from '@radix-ui/react-collapsible';
import styles from '../DetailsPanel/DetailsPanel.module.scss';
import { ChevronLeft, ChevronRight, MapPin, Clock, Phone, Earth, AtSign, Calendar, House } from 'lucide-react';
import { Event } from '../../../types/event.types';
import { dateFormatter } from '@/src/core/util/dateFormatter';
import Slider from '../../Slider/Slider';
import React from 'react';
import { EVENT_CATEGORY } from '../../../types/eventCategoryItems';
import EventContainer from '../Content/EventContainer/EventContainer';
import LocationContainer from '../Content/LocationContainer/LocationContainer';
import { DetailsPanelView } from '../../../types/navigation.types';

interface DetailsSidebar {
  isOpen: boolean;
  isNavigationSidebarOpen: boolean;
  item: Event | undefined;
  selectedDetailPanel: DetailsPanelView | null
  onOpenChange: () => void;
}

export interface SidebarContentProps {
  onOpenChange: () => void;
}

const DetailsSidebar: React.FC<DetailsSidebar> = ({
  isOpen,
  isNavigationSidebarOpen,
  item,
  selectedDetailPanel,
  onOpenChange,
}) => {
  const { id, categoryId, title, description, imageUrl } = item ?? {};
  const category = EVENT_CATEGORY.find(e => e.id === categoryId);

  const containerClasses = [
    styles.sidebar,
    isNavigationSidebarOpen ? styles.parentSidebarExpanded : styles.parentSidebarCollapsed,
  ].filter(Boolean).join(' ');

  console.log(selectedDetailPanel)
  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={onOpenChange}
      className={containerClasses}
    >
      {/* {selectedDetailPanel && selectedDetailPanel === DetailsPanelView.LOCATION &&
        <LocationContainer
          isOpen={isOpen}
          isNavigationSidebarOpen={isNavigationSidebarOpen}
          item={item}
          onOpenChange={onOpenChange}
        />
      }
      {/* */}
      <EventContainer
        isOpen={isOpen}
        isNavigationSidebarOpen={isNavigationSidebarOpen}
        item={item}
        onOpenChange={onOpenChange}
      /> 
    </Collapsible.Root>
  );
};

export default DetailsSidebar;
