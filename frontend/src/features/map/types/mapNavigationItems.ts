import { Search, LayoutGrid, Settings } from "lucide-react";
import { ContentPanelView, MapNavigationItem } from "./navigation.types";

export const MAP_NAVIGATION_ITEMS: MapNavigationItem[] = [
  { 
    icon: Search, 
    label: ContentPanelView.SEARCH, 
    action: 'search',
  },
  { 
    icon: LayoutGrid, 
    label: ContentPanelView.EVENT_GUIDE, 
    action: 'events',
  },
];