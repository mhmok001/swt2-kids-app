import * as Collapsible from '@radix-ui/react-collapsible';
import styles from './ContentPanel.module.scss';
import EventSearchContainer from '../Content/EventSearchContainer/EventSearchCotainer';
import { SelectedNavivationItem, ContentPanelView, DetailsPanelView } from '../../../types/navigation.types';
import EventGuideContainer from '../Content/EventGuideContainer/EventGuideContainer';
import { SelectEventIdProp, SelectEventIdProps } from '../../../types/event.types';

interface ContentPanelProps extends SelectEventIdProp, SelectEventIdProps {
  selectedContent: SelectedNavivationItem | null,
  selectedDetail: (detail: DetailsPanelView) => void;
  isOpen: boolean; 
  onOpenChange: () => void;
}

export default function ContentPanel({
  selectedContent,
  isOpen,
  onOpenChange,
  selectedEventId,
  onSelectEventId,
  selectedDetail
}: ContentPanelProps) {
  const { label } = selectedContent ?? {};
  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={onOpenChange}
      className={styles.sidebar}
    >
      {label=== ContentPanelView.SEARCH &&
        <EventSearchContainer
          onOpenChange={onOpenChange}
          onSelectEventId={onSelectEventId}
          selectedEventId={selectedEventId}
        />
      }
      {label === ContentPanelView.EVENT_GUIDE &&
        <EventGuideContainer
          selectedDetail={selectedDetail}
          onOpenChange={onOpenChange}
          onSelectEventId={onSelectEventId}
        />
      }
    </Collapsible.Root >
  );
}